import nodemailer from 'nodemailer';
import 'dotenv/config';
export const prerender = false;

export async function POST({ request }) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: import.meta.env.MAIL_USER,
        pass: import.meta.env.MAIL_PASS,
      },
    });


    await transporter.sendMail({
      from: `"AiMara Contact Form" <${import.meta.env.MAIL_USER}>`,
      to: 'contact@aimaralab.com',
      subject: 'New Contact Message',
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,   // Al responder, irá directo al usuario
    });


    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error sending email:', error);

    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
