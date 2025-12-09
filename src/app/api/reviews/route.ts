// import { NextResponse } from "next/server";

// const LOCATION_ID = process.env.GOOGLE_LOCATION_ID!;
// const API_KEY = process.env.GOOGLE_API_KEY!; // tylko jeśli korzystasz z OAuth 2.0 → token wymienny
// const ACCESS_TOKEN = process.env.GOOGLE_ACCESS_TOKEN!; // tu podajesz token OAuth (instrukcje dam poniżej)

// export async function GET() {
//   try {
//     const res = await fetch(
//       `https://businessprofileperformance.googleapis.com/v1/locations/${LOCATION_ID}/reviews`,
//       {
//         headers: {
//           Authorization: `Bearer ${ACCESS_TOKEN}`,
//         },
//       }
//     );

//     if (!res.ok) {
//       const error = await res.text();
//       return NextResponse.json({ error }, { status: 500 });
//     }

//     const data = await res.json();
//     return NextResponse.json({ reviews: data.reviews || [] });
//   } catch (error) {
//     console.log(error);

//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
