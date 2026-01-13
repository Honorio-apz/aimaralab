/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, d as renderTemplate, e as renderComponent } from '../chunks/astro/server_DbVNoNJ_.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BzuV2yUc.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Ourmision = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-----

<head>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400&family=Roboto:wght@100&display=swap" rel="stylesheet">
</head>
--- --><!-- 

<section class="bg-gray-50 w-full py-16 px-4">
  <div class="max-w-3xl mx-auto flex flex-col items-center text-center">
    <h1
      class="text-3xl font-light mb-2 tracking-tight text-gray-800 font-roboto"
    >
      About AiMara Lab
    </h1>
    <h2 class="text-xl font-light text-gray-500 mb-6 font-roboto">
      Vision, Values & Mission
    </h2>
    <p class="text-base text-gray-600 font-normal leading-relaxed max-w-2xl">
      AIMARA LAB is an independent, non-profit organization based in Peru,
      dedicated to advancing artificial intelligence through ethical, impactful,
      and collaborative work.
    </p>
  </div>
</section>
-->${maybeRenderHead()}<section class="py-24 bg-white dark:bg-black transition-colors duration-300"> <div class="max-w-7xl mx-auto px-4"> <!-- Título global --> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
About AiMara Lab
</h1> <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
Vision, Values & Mission
</p> </div> <!-- Tarjetas en grid --> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2"> <!-- Mission --> <div class="rounded-2xl p-8 flex flex-col bg-white dark:bg-space-900 border border-gray-200 dark:border-white/10 hover:border-aimara-teal dark:hover:border-aimara-teal transition-colors duration-300"> <h3 class="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
Mission
</h3> <p class="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
To create intelligent, ethical, and inclusive technologies through
          artificial intelligence, combining scientific research, education, and
          innovation to generate real-world impact.
</p> </div> <!-- Vision --> <div class="rounded-2xl p-8 flex flex-col bg-white dark:bg-space-900 border border-gray-200 dark:border-white/10 hover:border-aimara-teal dark:hover:border-aimara-teal transition-colors duration-300"> <h3 class="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
Vision
</h3> <p class="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
To be recognized nationally and internationally as a leading research
          lab in artificial intelligence, known for scientific excellence, human
          talent development, and the responsible use of AI for societal
          benefit.
</p> </div> <!-- Objectives --> <div class="rounded-2xl p-8 flex flex-col bg-white dark:bg-space-900 border border-gray-200 dark:border-white/10 hover:border-aimara-teal dark:hover:border-aimara-teal transition-colors duration-300"> <h3 class="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
Objectives
</h3> <div class="text-base text-gray-600 dark:text-gray-400 leading-relaxed space-y-3"> <p>
To promote research, development, and the application of innovative
            solutions in Artificial Intelligence, Data Science, and Emerging
            Technologies.
</p> <p>
To apply these technologies in key areas such as education, justice,
            health, digital inclusion, and sustainable development.
</p> <p>
To capture and channel national or foreign funds for the promotion,
            dissemination, training, and research in new engineering
            technologies.
</p> </div> </div> <!-- History --> <div class="rounded-2xl p-8 flex flex-col bg-white dark:bg-space-900 border border-gray-200 dark:border-white/10 hover:border-aimara-teal dark:hover:border-aimara-teal transition-colors duration-300"> <h3 class="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">
Our Story
</h3> <div class="text-base text-gray-600 dark:text-gray-400 space-y-3"> <p>
AiMara Lab was founded in Peru with the purpose of leading
            responsible innovation in artificial intelligence. It emerged from
            the collaborative efforts of researchers and students who shared a
            strong commitment to scientific development, social impact, and
            ethical technology.
</p> <p>
In 2022, a milestone was reached with the publication of “Neural
            Machine Translator for Native Language Aimara to English and
            Spanish”. This highlighted the lab’s focus on language technologies
            and cultural preservation.
</p> <p>
The name AiMara combines “AI” for Artificial Intelligence and “MARA”
            from the Aymara language, meaning “year” — representing a new era of
            inclusive technology.
</p> <p>
We are also a proud participant of the Google for Nonprofits
            program, leveraging technology to amplify our social impact.
</p> </div> </div> </div> </div> </section>`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/components/landing/ourmision.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Proy_completos", $$Ourmision, {})} ` })}`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/pages/about.astro", void 0);

const $$file = "/Users/honorio/Honorio/Webs/aimaralab/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
