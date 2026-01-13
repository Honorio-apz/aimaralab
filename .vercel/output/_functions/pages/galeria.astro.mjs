/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, g as renderScript, b as addAttribute, d as renderTemplate, e as renderComponent } from '../chunks/astro/server_DbVNoNJ_.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BzuV2yUc.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

// src/data/galleryImages.js
const GALLERY_IMAGES = [

  { href: '/fotos/photoE0001.png', src: '/fotos/photoE0001.png' },
  { href: '/fotos/photoE0002.png', src: '/fotos/photoE0002.png' },
  { href: '/fotos/photoE0000.png', src: '/fotos/photoE0000.png' },

  { href: '/fotos/photo250010.png', src: '/fotos/photo250010.png' },
  { href: '/fotos/photo250009.png', src: '/fotos/photo250009.png' },
  { href: '/fotos/photo250008.png', src: '/fotos/photo250008.png' },
  { href: '/fotos/photo250007.png', src: '/fotos/photo250007.png' },
  { href: '/fotos/photo250006.png', src: '/fotos/photo250006.png' },
  { href: '/fotos/photo250005.png', src: '/fotos/photo250005.png' },
  { href: '/fotos/photo250004.png', src: '/fotos/photo250004.png' },
  { href: '/fotos/photo250003.png', src: '/fotos/photo250003.png' },
  { href: '/fotos/photo250002.png', src: '/fotos/photo250002.png' },


  { href: '/fotos/photo240006.png', src: '/fotos/photo240006.png' },
  { href: '/fotos/photo240005.png', src: '/fotos/photo240005.png' },
  { href: '/fotos/photo240004.png', src: '/fotos/photo240004.png' },
  { href: '/fotos/photo240003.png', src: '/fotos/photo240003.png' },
  { href: '/fotos/photo240002.png', src: '/fotos/photo240002.png' },
  { href: '/fotos/photo240001.png', src: '/fotos/photo240001.png' },
  { href: '/fotos/photo240000.png', src: '/fotos/photo240000.png' },

  { href: '/fotos/photo230004.png', src: '/fotos/photo230004.png' },
  { href: '/fotos/photo230003.png', src: '/fotos/photo230003.png' },
  { href: '/fotos/photo230002.png', src: '/fotos/photo230002.png' },
  { href: '/fotos/photo230001.png', src: '/fotos/photo230001.png' },
  { href: '/fotos/photo230000.png', src: '/fotos/photo230000.png' },



];

const $$Galeria$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 relative overflow-hidden"> <div class="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="text-center max-w-3xl mx-auto mb-16"> <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
Activity <span class="text-aimara-teal">Gallery</span> </h1> <p class="text-lg text-gray-600 dark:text-gray-400">
Explore our captured moments: scholarships, presentations, and
                events that define our community.
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> ${GALLERY_IMAGES.map((image, index) => renderTemplate`<div class="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-panel cursor-pointer gallery-item"${addAttribute(image.src, "data-src")}${addAttribute(index, "data-index")}> <div class="absolute inset-0 bg-gray-200 dark:bg-space-800 animate-pulse"></div> <img${addAttribute(image.src, "src")}${addAttribute(`Activity photo ${index + 1}`, "alt")} class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" onload="this.previousElementSibling.style.display='none';"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"> <span class="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
View full image
</span> </div> </div>`)} </div> </div> <!-- Lightbox Modal --> <div id="lightbox" class="fixed inset-0 z-[100] hidden items-center justify-center bg-black/90 backdrop-blur-sm opacity-0 transition-opacity duration-300" role="dialog" aria-modal="true"> <div class="absolute top-4 right-4 z-[110]"> <button id="close-lightbox" class="text-white hover:text-aimara-teal transition-colors p-2 rounded-full hover:bg-white/10" aria-label="Close gallery"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <div class="relative w-full h-full max-w-5xl max-h-[90vh] mx-auto p-4 flex items-center justify-center"> <img id="lightbox-img" src="" alt="Full view" class="max-w-full max-h-full object-contain shadow-2xl rounded-lg scale-95 transition-transform duration-300"> </div> </div> </section> ${renderScript($$result, "/Users/honorio/Honorio/Webs/aimaralab/src/components/landing/Galeria.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/components/landing/Galeria.astro", void 0);

const $$Galeria = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Gallery" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Proy_completos", $$Galeria$1, {})} ` })}`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/pages/galeria.astro", void 0);

const $$file = "/Users/honorio/Honorio/Webs/aimaralab/src/pages/galeria.astro";
const $$url = "/galeria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Galeria,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
