import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderTemplate } from './astro/server_DbVNoNJ_.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute([
    "py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative",
    className
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/components/ui/Section.astro", void 0);

export { $$Section as $ };
