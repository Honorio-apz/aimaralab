/* empty css                                    */
import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_DbVNoNJ_.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BzuV2yUc.mjs';
import { B as BLOGS } from '../../chunks/blogs_BgLVjTi3.mjs';
export { renderers } from '../../renderers.mjs';

const $$AimaraCeniaLlmAlliance = createComponent(($$result, $$props, $$slots) => {
  const blog = BLOGS[1];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": blog.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-white"> <section class="max-w-5xl mx-auto px-4 py-16"> <div class="mb-6 text-center"> <h1 class="text-3xl font-bold text-gray-800">${blog.title}</h1> <p class="text-gray-500 text-sm">${blog.date}</p> <div class="w-16 h-1 bg-celeste_aimara rounded mt-2 mx-auto"></div> </div> <div class="mb-8 flex justify-center"> <img${addAttribute(blog.image_titular, "src")}${addAttribute(blog.title, "alt")} class="w-full h-72 object-cover rounded-xl shadow-lg border"> </div> <div class="text-base text-gray-700 leading-relaxed mb-12 [&_strong]:text-lg"> <p>${unescapeHTML(blog.texto_blog)}</p> </div> ${blog.imagenes_cuerpo.length > 0 && renderTemplate`<div class="grid gap-4 md:grid-cols-2"> ${blog.imagenes_cuerpo.map((img) => renderTemplate`<img${addAttribute(img, "src")} alt="Blog image" class="rounded-lg shadow border">`)} </div>`} </section> </main> ` })}`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/pages/blogs/aimara-cenia-llm-alliance.astro", void 0);

const $$file = "/Users/honorio/Honorio/Webs/aimaralab/src/pages/blogs/aimara-cenia-llm-alliance.astro";
const $$url = "/blogs/aimara-cenia-llm-alliance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AimaraCeniaLlmAlliance,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
