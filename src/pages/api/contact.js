import nodemailer from 'nodemailer';

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
      from: `"${name}" <${email}>`,
      to: 'contact@aimaralab.com',
      subject: 'New Contact Message',
      text: message,
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
