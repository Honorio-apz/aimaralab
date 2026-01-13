/* empty css                                 */
import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DbVNoNJ_.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BzuV2yUc.mjs';
import { P as PROJECTS } from '../chunks/projects_CK4QoUFJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Proyectos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Proyectos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="proyectos" class="bg-white dark:bg-black w-full min-h-screen py-16 transition-colors duration-300"> <div class="mx-auto w-full max-w-7xl px-4"> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
Our Projects
</h1> <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
Exploring the frontiers of Artificial Intelligence
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> ${PROJECTS.map((project) => renderTemplate`<div class="glass-panel rounded-xl overflow-hidden hover:border-celeste_aimara/30 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col shadow-lg dark:shadow-none"> <div class="relative w-full h-56 overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent dark:from-space-950 dark:to-transparent z-10 opacity-60"></div> <img${addAttribute(project.image, "src")}${addAttribute(project.short_title, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"> </div> <div class="p-8 flex flex-col flex-grow relative z-20 -mt-12"> <div class="bg-white/90 dark:bg-space-900/80 backdrop-blur-md p-6 rounded-xl border border-gray-200 dark:border-white/5 flex-grow flex flex-col shadow-sm"> <h3 class="text-2xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-celeste_aimara transition-colors"> ${project.short_title} </h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-4 flex-grow"> ${project.short_description} </p>  <div class="mt-auto flex flex-col gap-3">  ${project.link_ver_detalle && renderTemplate`<a${addAttribute(project.link_ver_detalle, "href")}${addAttribute(
    project.link_ver_detalle.startsWith("http") ? "_blank" : "_self",
    "target"
  )}${addAttribute(
    project.link_ver_detalle.startsWith("http") ? "noopener noreferrer" : "",
    "rel"
  )} class="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-lg text-white dark:text-space-950 bg-celeste_aimara hover:bg-celeste_aimara/90 dark:hover:bg-white hover:shadow-[0_0_15px_rgba(0,180,204,0.4)] transition-all duration-300"> <span> ${project.link_ver_detalle.startsWith("/projects") ? "Read Blog" : "See Project"} </span> <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5-.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"></path> <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"></path> </svg> </a>`}  ${project.project_links && project.project_links.length > 0 && renderTemplate`<div class="flex flex-col gap-2"> ${project.project_links.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-all duration-300"> <span>${link.text}</span> </a>`)} </div>`} </div> </div> </div> </div>`)} </div> </div> </section> ` })}`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/pages/proyectos.astro", void 0);

const $$file = "/Users/honorio/Honorio/Webs/aimaralab/src/pages/proyectos.astro";
const $$url = "/proyectos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proyectos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
