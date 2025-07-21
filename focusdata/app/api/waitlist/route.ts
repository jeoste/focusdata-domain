import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const OWNER_EMAIL = process.env.OWNER_EMAIL;
    
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json({ error: "Configuration serveur manquante (RESEND_API_KEY)." }, { status: 500 });
    }
    
    if (!OWNER_EMAIL) {
      console.error("OWNER_EMAIL is missing");
      return NextResponse.json({ error: "Configuration serveur manquante (OWNER_EMAIL)." }, { status: 500 });
    }

    const resend = new Resend(RESEND_API_KEY);

    try {
      const data = await resend.emails.send({
        from: "Focus <onboarding@resend.dev>",
        to: [OWNER_EMAIL],
        subject: "Nouvelle inscription à la waitlist Focus",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Nouvelle inscription à la waitlist</h2>
            <p>Une nouvelle personne s'est inscrite à la waitlist :</p>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;"><strong>${email}</strong></p>
          </div>
        `
      });

      if (data.error) {
        console.error("Resend API Error:", data.error);
        return NextResponse.json({ error: "Erreur lors de l'envoi de l'email : " + data.error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true });
    } catch (error: any) {
      console.error("Resend Error:", error);
      return NextResponse.json({ 
        error: "Erreur lors de l'envoi de l'email", 
        details: error.message || "Erreur inconnue"
      }, { status: 500 });
    }
  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
