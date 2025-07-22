import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }

    // Envoi via Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const OWNER_EMAIL = process.env.OWNER_EMAIL;
    if (!RESEND_API_KEY || !OWNER_EMAIL) {
      return NextResponse.json({ error: "Server configuration is missing." }, { status: 500 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: OWNER_EMAIL,
        subject: "F O C U S - New subscription",
        html: `<p>A new person subsribed to the waitlist : <b>${email}</b></p>`
      })
    });

    if (!res.ok) {
      const error = await res.text();
      return NextResponse.json({ error: "Error when sending mail", details: error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
} 