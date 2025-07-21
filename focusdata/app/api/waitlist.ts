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
      return NextResponse.json({ error: "Configuration serveur manquante." }, { status: 500 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",  // Use Resend's test email during development
        to: OWNER_EMAIL,
        subject: "Nouvelle inscription à la waitlist Focus",
        html: `<p>Nouvelle inscription à la waitlist : <b>${email}</b></p>`
      })
    });

    if (!res.ok) {
      const error = await res.text();
      return NextResponse.json({ error: "Erreur lors de l'envoi de l'email.", details: error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
} 