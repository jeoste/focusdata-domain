import { Resend } from 'resend';
import { ContactEmailTemplate, getContactEmailText } from '../../../components/email-template';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_EMAIL || process.env.OWNER_EMAIL || 'jeoffrey.stephan@gmail.com';
    const { data, error } = await resend.emails.send({
      from: 'Contact <onboarding@resend.dev>',
      to: [toEmail],
      subject: `Nouveau message de contact de ${name}`,
      react: ContactEmailTemplate({ name, email, message }),
      text: getContactEmailText({ name, email, message }),
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
