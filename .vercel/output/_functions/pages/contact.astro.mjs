/* empty css                                 */
import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DbVNoNJ_.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BzuV2yUc.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="bg-white dark:bg-black min-h-screen flex items-center justify-center py-16 px-4 transition-colors duration-300"> <section class="max-w-4xl w-full"> <div class="text-center mb-12"> <h1 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
Contact Us
</h1> <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
If you have questions, partnership ideas, or just want to get in
          touch, we'd love to hear from you.
</p> </div> <div class="glass-panel rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-white/10 shadow-xl"> <!-- Formulario Interno --> <form id="contact-form" class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label> <input type="text" name="name" required class="w-full rounded-lg bg-white dark:bg-space-900 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white px-4 py-3 focus:ring-2 focus:ring-celeste_aimara focus:border-transparent transition-all outline-none placeholder-gray-400 dark:placeholder-gray-600" placeholder="Your name"> </div> <div> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label> <input type="email" name="email" required class="w-full rounded-lg bg-white dark:bg-space-900 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white px-4 py-3 focus:ring-2 focus:ring-celeste_aimara focus:border-transparent transition-all outline-none placeholder-gray-400 dark:placeholder-gray-600" placeholder="your@email.com"> </div> </div> <div> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label> <textarea name="message" rows="5" required class="w-full rounded-lg bg-white dark:bg-space-900 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white px-4 py-3 focus:ring-2 focus:ring-celeste_aimara focus:border-transparent transition-all outline-none placeholder-gray-400 dark:placeholder-gray-600" placeholder="How can we help you?"></textarea> </div> <div class="flex justify-center pt-4"> <button type="submit" class="px-8 py-3 rounded-lg bg-celeste_aimara text-white dark:text-space-950 font-bold hover:bg-celeste_aimara/90 dark:hover:bg-white hover:shadow-[0_0_20px_rgba(0,180,204,0.4)] transition-all duration-300 transform hover:-translate-y-1">
Send Message
</button> </div> </form> <p id="status-message" class="text-center text-sm text-gray-500 dark:text-gray-400 mt-6 min-h-[20px]"></p> <div class="mt-10 pt-6 border-t border-gray-200 dark:border-white/5 text-center text-sm text-gray-500">
Or contact us directly at <a href="mailto:contact@aimaralab.com" class="text-celeste_aimara font-medium hover:text-gray-900 dark:hover:text-white transition-colors">contact@aimaralab.com</a> </div> </div> </section> </div> <script>
    const form = document.getElementById("contact-form");
    const statusMessage = document.getElementById("status-message");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      };

      statusMessage.textContent = "Sending...";
      statusMessage.className =
        "text-center text-sm text-celeste_aimara mt-6 min-h-[20px]";

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
          statusMessage.textContent = "Message sent successfully!";
          statusMessage.className =
            "text-center text-sm text-green-500 dark:text-green-400 mt-6 min-h-[20px]";
          form.reset();
        } else {
          statusMessage.textContent = "Failed to send message.";
          statusMessage.className =
            "text-center text-sm text-red-500 dark:text-red-400 mt-6 min-h-[20px]";
        }
      } catch (error) {
        statusMessage.textContent = "Error sending message.";
        statusMessage.className =
          "text-center text-sm text-red-500 dark:text-red-400 mt-6 min-h-[20px]";
      }
    });
  <\/script> `])), maybeRenderHead()) })}`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/pages/contact.astro", void 0);

const $$file = "/Users/honorio/Honorio/Webs/aimaralab/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
