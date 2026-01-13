/* empty css                                 */
import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DbVNoNJ_.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BzuV2yUc.mjs';
import { B as BLOGS } from '../chunks/blogs_BgLVjTi3.mjs';
export { renderers } from '../renderers.mjs';

const $$Blogs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blogs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full min-h-screen bg-white dark:bg-black py-16 transition-colors duration-300"> <div class="mx-auto max-w-7xl px-4"> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
AiMara Lab Blog
</h1> <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
Insights, Reflections & Updates from our community
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> ${BLOGS.map((blog) => renderTemplate`<a${addAttribute(blog.enlace_blog.url, "href")} class="block glass-panel rounded-xl overflow-hidden hover:border-celeste_aimara/30 transition-all duration-300 transform hover:-translate-y-2 group shadow-lg dark:shadow-none">  <div class="relative w-full h-56 overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent dark:from-space-950 dark:to-transparent z-10 opacity-60"></div> <img${addAttribute(blog.image_titular, "src")}${addAttribute(blog.title, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"> </div>  <div class="p-8 relative z-20 -mt-12"> <div class="bg-white/90 dark:bg-space-900/90 backdrop-blur-md p-6 rounded-xl border border-gray-200 dark:border-white/5 h-full flex flex-col shadow-sm"> <div class="flex items-center gap-2 mb-3"> <span class="px-2 py-1 text-xs font-medium rounded-md bg-celeste_aimara/10 text-celeste_aimara border border-celeste_aimara/20">
Article
</span> <span class="text-xs text-gray-500 dark:text-gray-400"> ${blog.date} </span> </div> <h3 class="text-xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-celeste_aimara transition-colors"> ${blog.title} </h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3 flex-grow"> ${blog.texto_blog} </p> <div class="mt-auto pt-4 border-t border-gray-200 dark:border-white/5 flex items-center text-sm font-medium text-celeste_aimara group-hover:text-gray-900 dark:group-hover:text-white transition-colors"> ${blog.enlace_blog.label} <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </div> </div> </div> </a>`)} </div> </div> </section> ` })}`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/pages/blogs.astro", void 0);

const $$file = "/Users/honorio/Honorio/Webs/aimaralab/src/pages/blogs.astro";
const $$url = "/blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blogs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
