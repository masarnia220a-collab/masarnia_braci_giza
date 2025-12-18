"use client";

import { Mail, Phone, Pin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export const ContactUs = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const privacyRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return;

    const name = nameRef.current?.value.trim() ?? "";
    const email = emailRef.current?.value.trim() ?? "";
    const subject = subjectRef.current?.value.trim() ?? "";
    const message = messageRef.current?.value.trim() ?? "";
    const website = honeypotRef.current?.value;

    // 🔒 Honeypot (silent fail)
    if (website) return;

    // ❌ Privacy

    // ❌ Name
    if (!name) {
      toast.error("Podaj swoje imię.");
      nameRef.current?.focus();
      return;
    }

    if (name.length < 2) {
      toast.error("Imię jest zbyt krótkie.");
      nameRef.current?.focus();
      return;
    }

    // ❌ Email
    if (!email) {
      toast.error("Podaj adres email.");
      emailRef.current?.focus();
      return;
    }
    if (!subject) {
      toast.error("Podaj temat wiadomości.");
      subjectRef.current?.focus();
      return;
    }
    if (!message) {
      toast.error("Wpisz treść wiadomości.");
      messageRef.current?.focus();
      return;
    }

    if (message.length < 10) {
      toast.error("Wiadomość jest zbyt krótka.");
      messageRef.current?.focus();
      return;
    }
    if (!privacyRef.current?.checked) {
      toast.error("Musisz zaakceptować politykę prywatności.");
      privacyRef.current?.focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Podaj poprawny adres email.");
      emailRef.current?.focus();
      return;
    }

    // ❌ Subject (OPTIONAL – remove if not required)

    // ❌ Message

    const payload = {
      name,
      email,
      subject,
      message,
      website,
    };

    try {
      setLoading(true);

      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();

      toast.success("Wiadomość została wysłana. Dziękujemy!");

      // reset form
      nameRef.current!.value = "";
      emailRef.current!.value = "";
      subjectRef.current!.value = "";
      messageRef.current!.value = "";
      privacyRef.current!.checked = false;
    } catch {
      toast.error("Coś poszło nie tak. Spróbuj ponownie później.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="kontakt" className="flex flex-col gap-16 relative">
      <Image
        src="/szynka.png"
        height={173}
        width={237}
        alt="Zdjęcie przedstawiające szynke"
        className="absolute -top-12 right-0"
      />

      {/* HEADER */}
      <div className="flex flex-col gap-2 text-center max-w-[60%] p-6 max-[650px]:max-w-full self-center">
        <p className="text-brand-red uppercase font-inter tracking-wide font-bold subheading-md subheading-sm">
          Masz pytanie?
        </p>
        <h2 className="text-36 font-bold capitalize heading-md heading-sm">
          Napisz do nas
        </h2>
        <p className="paragraph paragraph-sm paragraph-md">
          Chcesz zapytać o skład naszych wyrobów, zamówić większą ilość na
          wesele, czy po prostu dowiedzieć się, co dziś wędzimy? Napisz do nas
          lub zadzwoń.
        </p>
      </div>

      <div className="grid max-[750px]:grid-cols-1 grid-cols-[1fr_2fr] bg-background-softer p-5 rounded-2xl max-[450px]:p-2">
        {/* LEFT */}
        <div className="flex flex-col gap-9 bg-brand-red rounded-2xl p-8 max-[450px]:p-4">
          <div className="flex flex-col gap-3">
            <h4 className="text-20 font-medium text-white">Dane Kontaktowe</h4>
            <p className="paragraph !text-white/70">
              Cenimy sobie bezpośredni kontakt. Zadzwoń, napisz lub odwiedź nas
              osobiście.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <a href="tel:+48146833990" className="flex items-center gap-5">
              <Phone className="text-white" />
              <span className="text-white/80">+48 14 683 39 90</span>
            </a>

            <a
              href="mailto:masarnia220@wp.pl"
              className="flex items-center gap-5"
            >
              <Mail className="text-white" />
              <span className="text-white/80">masarnia220@wp.pl</span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Żarówka+220A,+39-312+Żarówka"
              target="_blank"
              className="flex items-center gap-5"
            >
              <Pin className="text-white" />
              <span className="text-white/80">
                Żarówka 220A, 39-312 Żarówka
              </span>
            </a>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 p-8 max-[400px]:px-2"
        >
          {/* Honeypot */}
          <input
            ref={honeypotRef}
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          {/* NAME + EMAIL */}
          <div className="grid grid-cols-2 max-[500px]:grid-cols-1 gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-black font-medium text-15">
                Imię i nazwisko
              </label>
              <input
                ref={nameRef}
                type="text"
                placeholder="Twoje imię i nazwisko"
                className="bg-transparent border-b border-brand-red focus:outline-none text-black py-1"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-black font-medium text-15">Email</label>
              <input
                ref={emailRef}
                type="email"
                placeholder="Twój email"
                className="bg-transparent border-b border-brand-red focus:outline-none text-black py-1"
              />
            </div>
          </div>

          {/* SUBJECT */}
          <div className="flex flex-col gap-1">
            <label className="text-black font-medium text-15">Temat</label>
            <input
              ref={subjectRef}
              type="text"
              placeholder="Temat wiadomości"
              className="bg-transparent border-b border-brand-red focus:outline-none text-black py-1"
            />
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-1">
            <label className="text-black font-medium text-15">Wiadomość</label>
            <textarea
              ref={messageRef}
              rows={4}
              placeholder="Twoja wiadomość..."
              className="bg-transparent border-b border-brand-red focus:outline-none text-black py-2 resize-none"
            />
          </div>

          {/* PRIVACY */}
          <label
            htmlFor="privacy"
            className="flex items-center gap-3 text-[15px] text-black"
          >
            <span className="relative flex h-4 w-4 items-center justify-center">
              <input
                ref={privacyRef}
                id="privacy"
                type="checkbox"
                className="peer absolute h-4 w-4 appearance-none rounded border border-brand-red checked:bg-brand-red"
              />
              <svg
                className="absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </span>

            <span>
              Akceptuję{" "}
              <Link
                href="/polityka-prywatnosci"
                className="text-brand-red underline"
                target="_blank"
              >
                politykę prywatności
              </Link>
            </span>
          </label>

          {/* SUBMIT */}
          <div className="flex justify-center pt-6">
            <motion.button
              type="submit"
              disabled={loading}
              animate={{ width: loading ? 44 : 220 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="h-[44px] rounded-xl bg-brand-red text-white flex cursor-pointer items-center justify-center overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div
                    key="loader"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.2 }}
                  >
                    <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin block" />
                  </motion.div>
                ) : (
                  <motion.span
                    key="text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Wyślij wiadomość
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};
