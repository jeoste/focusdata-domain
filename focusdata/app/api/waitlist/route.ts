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
        from: "Focus Data Platform <onboarding@resend.dev>",
        to: [OWNER_EMAIL],
        subject: "F O C U S - Nouvelle inscription à la waitlist",
        html: `
          <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(59,8,70,0.08); padding: 32px;">
              <h1 style="color: #3b0846; font-size: 2rem; font-weight: 400; text-align: center;">F O C U S</h1>
            </div>
            <p style="font-size: 16px; color: #333333; margin-bottom: 16px;">
              Bonjour,<br>
              Une nouvelle personne vient de s'inscrire à la waitlist de F O C U S.
            </p>
            <div style="background: #f5f5f5; padding: 18px; border-radius: 6px; border: 2px solid #3b0846; text-align: center; margin-bottom: 24px;">
              <span style="font-weight: bold; color: #3b0846; font-size: 18px;">${email}</span>
            </div>
            <p style="font-size: 14px; color: #888; text-align: center;">
              Sauvegarde du mail code : FOCUSDATADEV888.<br>
            </p>
          </div>
        `
      });

      if (data.error) {
        console.error("Resend API Error:", data.error);
        return NextResponse.json({ error: "Erreur lors de l'envoi de l'email : " + data.error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true });
    } catch (error: unknown) {
      console.error("Resend Error:", error);
      return NextResponse.json({ 
        error: "Erreur lors de l'envoi de l'email", 
        details: (error as Error).message || "Erreur inconnue"
      }, { status: 500 });
    }
  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
