/* empty css                                 */
import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, r as renderSlot, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DbVNoNJ_.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BzuV2yUc.mjs';
/* empty css                                 */
import { $ as $$Section } from '../chunks/Section_CkeZfoHm.mjs';
import { Beaker, Users, Lightbulb } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { href, variant = "primary", class: className } = Astro2.props;
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-space-950";
  const variants = {
    primary: "bg-aimara-teal text-black font-semibold hover:bg-white hover:text-aimara-teal hover:shadow-[0_0_30px_rgba(0,194,203,0.6)] border border-transparent hover:border-aimara-teal hover:scale-105",
    secondary: "bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 backdrop-blur-sm hover:scale-105 hover:shadow-lg dark:hover:shadow-white/10",
    outline: "bg-transparent border border-aimara-teal text-aimara-teal hover:bg-aimara-teal/10 hover:scale-105"
  };
  const Element = href ? "a" : "button";
  return renderTemplate`${renderComponent($$result, "Element", Element, { "href": href, "class:list": [baseStyles, variants[variant], className] }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/components/ui/Button.astro", void 0);

const $$ModernHero = createComponent(($$result, $$props, $$slots) => {
  const partners = [
    { name: "CENIA", logo: "/logo/logo_cenia.png", url: "https://cenia.cl/" },
    {
      name: "Artificio",
      logo: "https://cdn.prod.website-files.com/64b9750384f5ae077a2c33fc/64f981ae0068f4ab01cde215_logo.png",
      url: "https://artificio.org/"
    },
    {
      name: "Latam-GPT",
      logo: "/logo/latam_gpt.png",
      url: "https://www.latamgpt.org/en"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-black selection:bg-aimara-teal selection:text-white" data-astro-cid-l42mgufw> <!-- Dynamic Background --> <div class="absolute inset-0 pointer-events-none" data-astro-cid-l42mgufw> <div class="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-500/10 dark:bg-purple-900/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-float delay-0" data-astro-cid-l42mgufw></div> <div class="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-aimara-teal/10 dark:bg-aimara-teal/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-float delay-1000" data-astro-cid-l42mgufw></div> </div> <div class="grid-bg absolute inset-0 opacity-40" data-astro-cid-l42mgufw></div> <!-- Fade Out Grid at Bottom --> <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" data-astro-cid-l42mgufw></div> <div class="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 pt-32 sm:pt-40 pb-20" data-astro-cid-l42mgufw> <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center" data-astro-cid-l42mgufw> <!-- Text Content --> <div class="text-left animate-fade-in-up" data-astro-cid-l42mgufw> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aimara-teal/10 text-aimara-teal text-sm font-medium mb-8 border border-aimara-teal/20 backdrop-blur-sm" data-astro-cid-l42mgufw> <span class="flex h-2 w-2 rounded-full bg-aimara-teal animate-pulse" data-astro-cid-l42mgufw></span>
Advancing AI in Latin America
</div> <h1 class="text-5xl sm:text-6xl font-display font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6" data-astro-cid-l42mgufw>
Innovating <br data-astro-cid-l42mgufw> <span class="text-transparent bg-clip-text bg-gradient-to-r from-aimara-teal to-blue-600 dark:from-aimara-teal dark:to-purple-400" data-astro-cid-l42mgufw>Artificial Intelligence</span> for a Better Future.
</h1> <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed" data-astro-cid-l42mgufw>
We are AiMara Lab. A pioneering research center dedicated to
                    developing ethical, robust, and impactful Artificial
                    Intelligence solutions from the heart of Latin America.
</p> <div class="flex flex-wrap gap-4" data-astro-cid-l42mgufw> ${renderComponent($$result, "Button", $$Button, { "href": "/proyectos", "variant": "primary", "class": "shadow-lg shadow-aimara-teal/20", "data-astro-cid-l42mgufw": true }, { "default": ($$result2) => renderTemplate`
Explore Research
` })} ${renderComponent($$result, "Button", $$Button, { "href": "/contact", "variant": "secondary", "class": "backdrop-blur-md bg-white/50 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10", "data-astro-cid-l42mgufw": true }, { "default": ($$result2) => renderTemplate`
Join the Community
` })} </div> <!-- Partners (Mini) --> <div class="mt-16 pt-8 border-t border-gray-100 dark:border-white/5" data-astro-cid-l42mgufw> <p class="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-4" data-astro-cid-l42mgufw>
Trusted by innovators
</p> <div class="flex gap-8 grayscale opacity-60 dark:invert dark:opacity-40" data-astro-cid-l42mgufw> ${partners.map((p) => renderTemplate`<img${addAttribute(p.logo, "src")}${addAttribute(p.name, "alt")} class="h-8 object-contain" data-astro-cid-l42mgufw>`)} </div> </div> </div> <!-- Visual Content / Illustration --> <div class="hidden lg:block relative h-full min-h-[600px] w-full" data-astro-cid-l42mgufw> <div class="absolute inset-0 flex items-center justify-center" data-astro-cid-l42mgufw> <!-- Abstract Glass Cards Composition --> <div class="relative w-[500px] h-[500px]" data-astro-cid-l42mgufw> <!-- Main Card --> <div class="absolute inset-0 glass-panel dark:bg-space-900/60 p-6 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-xl z-20 animate-float" data-astro-cid-l42mgufw> <!-- MacOS-like Header --> <div class="flex items-center justify-between mb-6 border-b border-gray-100 dark:border-white/5 pb-4" data-astro-cid-l42mgufw> <div class="flex items-center gap-2" data-astro-cid-l42mgufw> <div class="w-3 h-3 rounded-full bg-red-400/80" data-astro-cid-l42mgufw></div> <div class="w-3 h-3 rounded-full bg-yellow-400/80" data-astro-cid-l42mgufw></div> <div class="w-3 h-3 rounded-full bg-green-400/80" data-astro-cid-l42mgufw></div> </div> <div class="text-xs font-mono text-gray-400 flex items-center gap-1" data-astro-cid-l42mgufw> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-l42mgufw><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" data-astro-cid-l42mgufw></path></svg>
model_training.py
</div> </div> <!-- Code Snippet --> <div class="font-mono text-xs space-y-1.5 text-gray-600 dark:text-gray-300 mb-6 bg-gray-50/50 dark:bg-black/20 p-4 rounded-lg border border-gray-100 dark:border-white/5" data-astro-cid-l42mgufw> <div class="flex" data-astro-cid-l42mgufw> <span class="text-purple-600 dark:text-purple-400 mr-2" data-astro-cid-l42mgufw>class</span> <span class="text-blue-600 dark:text-blue-400" data-astro-cid-l42mgufw>AimaraTransformer</span>(nn.Module):
</div> <div class="pl-4 flex" data-astro-cid-l42mgufw> <span class="text-purple-600 dark:text-purple-400 mr-2" data-astro-cid-l42mgufw>def</span> <span class="text-yellow-600 dark:text-yellow-400" data-astro-cid-l42mgufw>__init__</span>(self):
</div> <div class="pl-8 text-gray-400 italic" data-astro-cid-l42mgufw>
// Initialize Aymara-Spanish Model
</div> <div class="pl-8" data-astro-cid-l42mgufw>
super().<span class="text-blue-600 dark:text-blue-400" data-astro-cid-l42mgufw>__init__</span>()
</div> <div class="pl-8" data-astro-cid-l42mgufw>
self.transformer = <span class="text-aimara-teal" data-astro-cid-l42mgufw>Transformer</span>(
</div> <div class="pl-12" data-astro-cid-l42mgufw>
layers=<span class="text-orange-500" data-astro-cid-l42mgufw>24</span>,
</div> <div class="pl-12" data-astro-cid-l42mgufw>
heads=<span class="text-orange-500" data-astro-cid-l42mgufw>16</span> </div> <div class="pl-8" data-astro-cid-l42mgufw>)</div> </div> <!-- Training Visual --> <div class="p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-inner" data-astro-cid-l42mgufw> <div class="flex justify-between items-end mb-3" data-astro-cid-l42mgufw> <div class="flex flex-col" data-astro-cid-l42mgufw> <span class="text-[10px] uppercase tracking-wider text-gray-400" data-astro-cid-l42mgufw>Status</span> <span class="text-xs font-bold text-gray-700 dark:text-white flex items-center gap-1" data-astro-cid-l42mgufw> <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" data-astro-cid-l42mgufw></span>
Optimizing
</span> </div> <div class="flex flex-col items-end" data-astro-cid-l42mgufw> <span class="text-[10px] uppercase tracking-wider text-gray-400" data-astro-cid-l42mgufw>Loss</span> <span class="text-xs font-bold text-aimara-teal" data-astro-cid-l42mgufw>0.0024 ▼</span> </div> </div> <div class="flex items-end gap-1 h-8 w-full" data-astro-cid-l42mgufw> <div class="w-1/6 bg-aimara-teal/20 h-[40%] rounded-sm" data-astro-cid-l42mgufw></div> <div class="w-1/6 bg-aimara-teal/30 h-[60%] rounded-sm" data-astro-cid-l42mgufw></div> <div class="w-1/6 bg-aimara-teal/40 h-[45%] rounded-sm" data-astro-cid-l42mgufw></div> <div class="w-1/6 bg-aimara-teal/50 h-[80%] rounded-sm" data-astro-cid-l42mgufw></div> <div class="w-1/6 bg-aimara-teal/70 h-[55%] rounded-sm" data-astro-cid-l42mgufw></div> <div class="w-1/6 bg-aimara-teal h-[90%] rounded-sm" data-astro-cid-l42mgufw></div> </div> </div> </div> <!-- Floating Elements --> <div class="absolute -top-12 -right-12 glass-panel p-4 rounded-2xl z-30 animate-float delay-700 shadow-xl w-48" data-astro-cid-l42mgufw> <div class="flex items-center gap-3 mb-2" data-astro-cid-l42mgufw> <div class="w-8 h-8 rounded-full bg-aimara-teal/20 flex items-center justify-center text-aimara-teal" data-astro-cid-l42mgufw> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-l42mgufw><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-l42mgufw></path></svg> </div> <div class="text-xs font-bold dark:text-white" data-astro-cid-l42mgufw>
High Impact
</div> </div> <div class="h-1 w-full bg-gray-100 dark:bg-white/10 rounded overflow-hidden" data-astro-cid-l42mgufw> <div class="h-full w-3/4 bg-aimara-teal" data-astro-cid-l42mgufw></div> </div> </div> <div class="absolute -bottom-8 -left-8 glass-panel p-4 rounded-2xl z-30 animate-float delay-300 shadow-xl w-40" data-astro-cid-l42mgufw> <div class="text-xs font-bold text-gray-500 dark:text-gray-400 mb-1" data-astro-cid-l42mgufw>
Publications
</div> <div class="text-2xl font-bold dark:text-white" data-astro-cid-l42mgufw>
25+
</div> </div> </div> </div> </div> </div> </div> </section> `;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/components/landing/ModernHero.astro", void 0);

const $$FeatureGrid = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Scientific Research",
      description: "Pushing the boundaries of AI with rigorous scientific methodology and cutting-edge experimentation.",
      icon: Beaker,
      color: "text-celeste_aimara",
      colSpan: "md:col-span-2"
    },
    {
      title: "Social Impact",
      description: "Developing AI solutions that address real-world challenges in Latin America and beyond.",
      icon: Users,
      color: "text-purple-400",
      colSpan: "md:col-span-1"
    },
    {
      title: "Innovation",
      description: "Bridging the gap between theoretical research and practical application.",
      icon: Lightbulb,
      color: "text-yellow-400",
      colSpan: "md:col-span-3"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "features" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${features.map((feature) => renderTemplate`<div${addAttribute(`group relative overflow-hidden rounded-2xl bg-white dark:bg-space-900 p-8 border border-gray-200 dark:border-white/10 hover:border-aimara-teal dark:hover:border-aimara-teal transition-colors duration-300 ${feature.colSpan}`, "class")}> <div${addAttribute(`mb-6 inline-flex p-3 rounded-lg bg-gray-50 dark:bg-space-800 text-aimara-teal`, "class")}> ${renderComponent($$result2, "feature.icon", feature.icon, { "size": 28, "strokeWidth": 1.5 })} </div> <h3 class="text-xl font-display font-semibold text-gray-900 dark:text-white mb-3"> ${feature.title} </h3> <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"> ${feature.description} </p> </div>`)} </div> ` })}`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/components/landing/FeatureGrid.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "AiMara Lab", "headerOverlay": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ModernHero", $$ModernHero, {})} ${renderComponent($$result2, "FeatureGrid", $$FeatureGrid, {})} ` })}`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/pages/index.astro", void 0);

const $$file = "/Users/honorio/Honorio/Webs/aimaralab/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
