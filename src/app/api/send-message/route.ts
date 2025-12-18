import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
function renderContactEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Nowa wiadomość</title>
</head>
<body style="margin:0; padding:0; background-color:#f5f5f5; font-family:Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:30px 12px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 6px 20px rgba(0,0,0,0.08);">

          <!-- HEADER -->
          <tr>
            <td style="background:#A51B31; padding:20px 28px; color:#ffffff;">
              <h1 style="margin:0; font-size:20px;">
                Nowa wiadomość z formularza
              </h1>
            
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:28px;">
              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td style="padding-bottom:12px;">
                    <strong>Imię:</strong><br />
                    <span style="color:#333;">${name}</span>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:12px;">
                    <strong>Email:</strong><br />
                    <a href="mailto:${email}" style="color:#A51B31; text-decoration:none;">
                      ${email}
                    </a>
                  </td>
                </tr>

                ${
                  subject
                    ? `
                <tr>
                  <td style="padding-bottom:12px;">
                    <strong>Temat:</strong><br />
                    <span style="color:#333;">${subject}</span>
                  </td>
                </tr>
                `
                    : ""
                }

                <tr>
                  <td style="padding-top:10px;">
                    <strong>Wiadomość:</strong>
                    <div style="
                      margin-top:8px;
                      padding:14px;
                      background:#f8f8f8;
                      border-left:4px solid #A51B31;
                      white-space:pre-wrap;
                      color:#333;
                      line-height:1.5;
                      border-radius:6px;
                    ">
${message}
                    </div>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding:18px; background:#fafafa; text-align:center; font-size:12px; color:#777;">
              Ta wiadomość została wysłana z formularza kontaktowego na stronie
              <br />
              <strong style="text">masarniabracigiza.pl</strong>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

// ---- Config ----
export const runtime = "nodejs"; // nodemailer needs node runtime (not edge)

// Upstash Redis
const redis = Redis.fromEnv();

// Rate limit: 5 requests per 10 minutes per IP (adjust to taste)
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"),
  analytics: true,
  prefix: "rl:contact",
});

// Zod schema (tight + safe)
const ContactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10).max(2000),
  website: z.string().trim().max(0).optional(),
});

// basic spam keyword guard (tweak for your site)
const SPAM_PATTERNS = [
  /viagra/i,
  /casino/i,
  /crypto/i,
  /backlink/i,
  /seo offer/i,
];

// ---- Helpers ----
function getClientIp(req: NextRequest) {
  // Vercel / proxies commonly set x-forwarded-for
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  // fallback
  return req.headers.get("x-real-ip") ?? "unknown";
}

function isAllowedOrigin(req: NextRequest) {
  const allowed = process.env.ALLOWED_ORIGIN?.trim();
  if (!allowed) return true; // allow if not configured (you can force it if you want)
  const origin = req.headers.get("origin");
  return origin === allowed;
}

function safeJson(message: string, status: number) {
  // keep responses consistent to reduce enumeration / bot tuning
  return NextResponse.json(
    { ok: status >= 200 && status < 300, message },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    }
  );
}

// ---- Route ----
export async function POST(req: NextRequest) {
  try {
    // 1) Origin check (CSRF-ish protection for browser-based posts)
    if (!isAllowedOrigin(req)) {
      return safeJson("Forbidden", 403);
    }

    // 2) Basic content-type check
    const contentType = req.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return safeJson("Unsupported Media Type", 415);
    }

    // 3) Simple payload size guard (Content-Length may be missing)
    const contentLength = Number(req.headers.get("content-length") ?? "0");
    if (contentLength && contentLength > 20_000) {
      return safeJson("Payload too large", 413);
    }

    // 4) Rate limit by IP
    const ip = getClientIp(req);
    const rl = await ratelimit.limit(ip);
    if (!rl.success) {
      return NextResponse.json(
        { ok: false, message: "Too many requests. Try again later." },
        {
          status: 429,
          headers: {
            "Cache-Control": "no-store",
            "X-RateLimit-Limit": String(rl.limit),
            "X-RateLimit-Remaining": String(rl.remaining),
            "X-RateLimit-Reset": String(rl.reset),
          },
        }
      );
    }

    // 5) Parse + validate
    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid form data",
          issues: parsed.error.issues,
        },
        { status: 400, headers: { "Cache-Control": "no-store" } }
      );
    }

    const { name, email, message, website, subject } = parsed.data;

    // 6) Honeypot check (bots)
    if (website && website.length > 0) {
      // pretend success to not help bots iterate
      return safeJson("Message received", 200);
    }

    // 7) Spam keyword guard
    const combined = `${name}\n${email}\n${message}`;
    if (SPAM_PATTERNS.some((re) => re.test(combined))) {
      // pretend success (do not reward spammers with signals)
      return safeJson("Message received", 200);
    }

    // 8) SMTP config (Gmail App Password)
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const TO = process.env.CONTACT_TO_EMAIL;

    if (!EMAIL_USER || !EMAIL_PASS || !TO) {
      return safeJson("Server misconfigured", 500);
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    // 9) Send
    await transporter.sendMail({
      from: `"Masarnia Braci Giża" <${EMAIL_USER}>`,
      to: TO, // np. masarnia220@wp.pl
      replyTo: email,
      subject: subject
        ? `📩 ${subject} — ${name}`
        : `📩 Nowa wiadomość od ${name}`,
      text: `Imię: ${name}\nEmail: ${email}\n\n${message}`, // fallback
      html: renderContactEmail({
        name,
        email,
        subject,
        message,
      }),
    });

    return safeJson("Message sent", 200);
  } catch (err) {
    // Do not leak internal errors to clients
    return safeJson("Something went wrong", 500);
  }
}

// Optional: handle preflight if you POST from other origin (usually not needed if same-origin)
export async function OPTIONS(req: NextRequest) {
  if (!isAllowedOrigin(req)) {
    return new NextResponse(null, { status: 403 });
  }
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN ?? "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}
