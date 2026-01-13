/* empty css                                    */
import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_DbVNoNJ_.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BzuV2yUc.mjs';
import { P as PROJECTS } from '../../chunks/projects_CK4QoUFJ.mjs';
/* empty css                                                        */
export { renderers } from '../../renderers.mjs';

const $$ProyectoAimaraTranslate = createComponent(($$result, $$props, $$slots) => {
  const project = PROJECTS[0];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": project.large_title, "data-astro-cid-bk6vsf54": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-white" data-astro-cid-bk6vsf54> <section class="max-w-5xl mx-auto px-4 py-16" data-astro-cid-bk6vsf54> <div class="mb-6 text-center" data-astro-cid-bk6vsf54> <h1 class="text-3xl font-bold text-gray-800" data-astro-cid-bk6vsf54>${project.large_title}</h1> <p class="text-gray-500 text-sm" data-astro-cid-bk6vsf54>${project.date}</p> <div class="w-16 h-1 bg-celeste_aimara rounded mt-2 mx-auto" data-astro-cid-bk6vsf54></div> </div> <div class="mb-8 flex justify-center" data-astro-cid-bk6vsf54> <img${addAttribute(project.image, "src")}${addAttribute(project.large_title, "alt")} class="w-full h-72 object-cover rounded-xl shadow-lg border" data-astro-cid-bk6vsf54> </div> ${project.project_links && project.project_links.length > 0 && renderTemplate`<div class="flex flex-col md:flex-row gap-4 justify-center mb-12" data-astro-cid-bk6vsf54> ${project.project_links.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" class="blog-button" data-astro-cid-bk6vsf54> <span data-astro-cid-bk6vsf54>${link.text}</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" data-astro-cid-bk6vsf54> <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" data-astro-cid-bk6vsf54></path> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" data-astro-cid-bk6vsf54></path> </svg> </a>`)} </div>`} <div class="text-base text-gray-700 leading-relaxed mb-12 [&_strong]:text-lg" data-astro-cid-bk6vsf54> <p data-astro-cid-bk6vsf54>${unescapeHTML(project.texto_blog)}</p> </div> ${project.project_links && project.project_links.length > 0 && renderTemplate`<div class="flex flex-col md:flex-row gap-4 justify-center mb-12" data-astro-cid-bk6vsf54> ${project.project_links.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" class="blog-button" data-astro-cid-bk6vsf54> <span data-astro-cid-bk6vsf54>${link.text}</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" data-astro-cid-bk6vsf54> <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" data-astro-cid-bk6vsf54></path> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" data-astro-cid-bk6vsf54></path> </svg> </a>`)} </div>`} </section> </main> ` })} `;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/pages/projects/proyecto-aimara-translate.astro", void 0);

const $$file = "/Users/honorio/Honorio/Webs/aimaralab/src/pages/projects/proyecto-aimara-translate.astro";
const $$url = "/projects/proyecto-aimara-translate";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProyectoAimaraTranslate,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
