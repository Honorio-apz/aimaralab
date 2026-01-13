/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, d as renderTemplate, e as renderComponent } from '../chunks/astro/server_DbVNoNJ_.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BzuV2yUc.mjs';
import 'clsx';
import { E as EVENTOS } from '../chunks/eventos_DhV0wbRk.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Resumenevento = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Resumenevento;
  const { event } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="rounded-2xl p-8 flex flex-col h-full bg-white dark:bg-space-900 border border-gray-200 dark:border-white/10 hover:border-aimara-teal dark:hover:border-aimara-teal transition-colors duration-300 group"> <div class="flex-1"> <h1 class="text-2xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-celeste_aimara transition-colors"> ${event.title} </h1> <p class="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3"> ${event.description} </p> </div> <div class="flex justify-between items-end text-sm flex-wrap gap-3 mt-auto pt-6 border-t border-gray-200 dark:border-white/5"> <div class="flex flex-col gap-3"> <span class="flex items-center gap-2 text-celeste_aimara font-semibold"> <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <rect x="3" y="4" width="18" height="18" rx="2"></rect> <path d="M16 2v4M8 2v4M3 10h18"></path> </svg> ${event.date} </span> <span class="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium"> <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 6v6l4 2"></path> </svg> ${event.time} </span> <span class="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-medium"> <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path d="M12 21c-4.418 0-8-6.418-8-10A8 8 0 0 1 20 11c0 3.582-3.582 10-8 10z"></path> <circle cx="12" cy="11" r="3"></circle> </svg> ${event.location} </span> </div> <a${addAttribute(event.registration.url, "href")} class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white dark:text-space-950 bg-celeste_aimara hover:bg-celeste_aimara/90 dark:hover:bg-white transition-all duration-300 shadow-lg shadow-celeste_aimara/20 dark:shadow-black/20"> <span>See more</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> </a> </div> </article>`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/components/landing/resumenevento.astro", void 0);

const $$Eventos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Eventos" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="w-full min-h-screen bg-white dark:bg-black pt-8 pb-24 my-9 transition-colors duration-300"> <div class="mx-auto max-w-7xl px-4"> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
Events & Community
</h1> <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
Symposiums, Workshops & Collaborative Activities
</p> </div> <div class="grid gap-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"> ${EVENTOS.map((evento) => renderTemplate`${renderComponent($$result2, "Evento", $$Resumenevento, { "event": evento })}`)} </div> </div> </section> ` })}`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/pages/eventos.astro", void 0);

const $$file = "/Users/honorio/Honorio/Webs/aimaralab/src/pages/eventos.astro";
const $$url = "/eventos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Eventos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
