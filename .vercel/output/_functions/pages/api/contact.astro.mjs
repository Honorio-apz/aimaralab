import nodemailer from 'nodemailer';
import 'dotenv/config';
export { renderers } from '../../renderers.mjs';

const prerender = false;
async function POST({ request }) {
  try {
    const { name, email, message } = await request.json();
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: undefined                         ,
        pass: undefined                         
      }
    });
    await transporter.sendMail({
      from: `"AiMara Contact Form" <${undefined                         }>`,
      to: "contact@aimaralab.com",
      subject: "New Contact Message",
      text: `Name: ${name}
Email: ${email}

Message:
${message}`,
      replyTo: email
      // Al responder, irá directo al usuario
    });
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
