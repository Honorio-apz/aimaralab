/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate, e as renderComponent } from '../chunks/astro/server_DbVNoNJ_.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BzuV2yUc.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

// 1. Agrega la propiedad `category` a cada miembro según corresponda.
const TEAM_MEMBERS = [
  // -- FUNDADORES ()
  {
    name: 'Honorio Apaza',
    role: 'Computer Science | NLP',
    category: 'fundador',
    description: 'Founder | IEEE Senior Member | Computer Science | NLP Researcher',
    avatar: '/team/honorio.png',
    url: 'https://hapaza.aimaralab.com/',
  },
  {
    name: 'Elmer Collanqui',
    role: 'CTO of AiMara Lab | Jr. Researcher ',
    category: 'fundador',
    description: 'CTO of AiMara Lab, Jr. Researcher, RAG/NLP researcher',
    avatar: '/team/elmer.png',
    url: 'https://mermitas.aimaralab.com/'
  },
  {
    name: 'Allison Reynoso',
    role: 'CDO of AiMara Lab | Jr. Researcher ',
    category: 'fundador',
    description: 'CDO of AiMara Lab, Jr. Researcher in Researcher of handwritten text recognition.',
    avatar: '/team/allison.png',
    url: 'https://pe.linkedin.com/in/allison-reynoso-serra-a1055221a'
  },

  // -- ACTIVO
  {
    name: 'Wilbur N. Chiuyari ',
    role: 'Image Processing | Computer Vision',
    category: 'activo',
    description: 'PhD student in Computer Science at ICMC-USP (Brazil).',
    avatar: '/team/wilbur.png',
    url: 'https://br.linkedin.com/in/wilbur-naike'
  },
  {
    name: 'Mariela Nina',
    role: 'Researcher in computer science',
    category: 'activo',
    description: 'Master’s student in Computer Science at UNIFESP, Brazil.',
    avatar: '/team/mariela.png',
    url: 'https://pe.linkedin.com/in/marielanina'
  },
  {
    name: 'Sofia Quispe',
    role: 'Data Scientist',
    category: 'activo',
    description: 'Data scientist with a strong background in AI and BI.',
    avatar: '/team/sofia.png',
    url: 'https://pe.linkedin.com/in/sofia-quispe-salas'
  },

  {
    name: 'Yoselin Arocutipa',
    role: 'Marketing Leader',
    category: 'activo',
    description: 'Graduate of Systems Engineering and Computer Science from UNAM',
    avatar: '/team/yoselin.png',
    url: 'https://pe.linkedin.com/in/yoselin-arocutipa-lovon'
  },
  {
    name: 'Jamir Balcona',
    role: 'Frontend',
    category: 'activo',
    description: 'Researcher of Augmented Generation Techniques Applied to Chatbots.',
    avatar: '/team/jamir.png',
    url: 'https://pe.linkedin.com/in/jamir-balcona-viza-80826a218'
  },

  {
    name: 'Seline Maquera',
    role: 'Logistic leader',
    category: 'activo',
    description: 'Researcher of Peruvian Sign Recognition (LSP) to Quechua',
    avatar: '/team/seline.png',
    url: 'https://pe.linkedin.com/in/seline-maciel-maquera-ortega-63b688280'
  },
  {
    name: 'Frank Ruiz',
    role: 'Student | Image processing',
    category: 'activo',
    description: 'Outstanding student of Systems and Informatics Engineering, UNAM.',
    avatar: '/team/frank.png'
  },
  {
    name: 'Edward Rocca',
    role: 'Student',
    category: 'activo',
    description: 'Student of Systems and Informatics Engineering, UNAM.',
    avatar: '/team/edward.png'
  },
  {
    name: 'Jose Paye',
    role: 'Student | Full Stack',
    category: 'activo',
    description: 'Student of Systems and Informatics Engineering, UNAM.',
    avatar: '/team/jose.png',
    url: 'https://pe.linkedin.com/in/zerok06'
  },

  {
    name: 'Victor Yana',
    role: 'Professor University',
    category: 'activo',
    description: 'Master in Business Management | Professor at DAISI of UNAM.',
    avatar: '/team/victor.png',
    url: 'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=27970'
  },



















  // -- HONORARIO
  {
    name: 'José Ochoa Luna',
    role: ' ',
    category: 'honorario',
    description: 'Ph.D. in Science Engineering School at the University of São Paulo, Brazil ',
    avatar: '/team/joseochoa.png',
    url: 'https://www.linkedin.com/in/jos%C3%A9-eduardo-ochoa-luna-6451b78/'
  },
  {
    name: 'Américo Rubín de Celis',
    role: 'PhD. en Ingeniería Eléctrica',
    category: 'honorario',
    description: 'PhD in Electrical Engineering from the Pontifical Catholic University of Brazil. ',
    avatar: '/team/americo.jpg',
    url: 'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=19542'
  },
  {
    name: 'Anibal Flores ',
    role: ' ',
    category: 'honorario',
    description: 'PhD in Computer Science at UNSA, Artificial Intelligence researcher. ',
    avatar: '/team/anibalflores.jpeg',
    url: 'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=0071481'
  },
  {
    name: 'Euler Tito Chura',
    role: 'PhD. en Ingeniería Eléctrica',
    category: 'honorario',
    description: 'Artificial Intelligence Researcher and professor affiliated at DAISI of UNAM. ',
    avatar: '/team/eulertito.jpeg',
    url: 'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=18932'
  },

  // -- COLABORADORES (ejemplo)
  {
    name: 'Luis Fernando Solis',
    role: ' ',
    category: 'colaborador',
    description: 'MSc. candidate in Computer Science at the University of Campinas, Brazil ',
    avatar: '/team/luissolis.jpg',
    url: 'https://www.linkedin.com/in/luisfernandosolisnavarro/'
  },




];

const $$Detallemiembros = createComponent(($$result, $$props, $$slots) => {
  const GROUPS = {
    activo: "Active members",
    honorario: "Honorary members",
    colaborador: "Collaborating members",
    fundador: "Executive Board"
  };
  function miembrosPorCategoria(categoria) {
    return TEAM_MEMBERS.filter((m) => m.category === categoria);
  }
  return renderTemplate`<!--
<section class="bg-gray-50 w-full py-16 px-4">
  <div class="max-w-3xl mx-auto flex flex-col items-center text-center">
    <h1 class="text-3xl font-light mb-2 tracking-tight text-gray-800 font-roboto">
      Meet our AiMara Lab Team
    </h1>
    <h2 class="text-xl font-light text-gray-500 mb-6 font-roboto">
      Researchers, Innovators & Collaborators
    </h2>
    <p class="text-base text-gray-600 font-normal leading-relaxed max-w-2xl">
      Discover the people driving innovation at AiMara Lab. Our diverse team comprised of students, professors, and collaborators works together to advance artificial intelligence research and promote technological development in Peru and beyond.
    </p>
  </div>
</section>
--><!-- esto es otra opcion 
          <h2 class="text-2xl font-light font-roboto text-celeste_aimara mb-8 text-left border-l-4 border-celeste_aimara pl-4">
            {groupTitle}
          </h2>
-->${maybeRenderHead()}<section id="equipo" class="bg-white dark:bg-black w-full min-h-screen transition-colors duration-300"> <div class="mx-auto max-w-7xl px-6 py-24 space-y-20"> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
Meet our Team
</h1> <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
Researchers, Innovators & Collaborators driving AI in Latin America
</p> </div> ${Object.entries(GROUPS).map(([key, groupTitle]) => {
    const members = miembrosPorCategoria(key);
    return members.length > 0 && renderTemplate`<div> <h2 class="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4"> ${groupTitle} </h2> <div class="w-24 h-[3px] bg-aimara-teal rounded-full mb-10"></div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"> ${members.map(({ name, description, avatar, url }) => renderTemplate`<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`Go to profile of ${name}`, "title")}${addAttribute(`Go to profile of ${name}`, "aria-label")} class="group flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300"> <br> <div class="w-24 h-24 aspect-square overflow-hidden rounded-full mb-4 ring-1 ring-gray-200 dark:ring-white/10 group-hover:ring-aimara-teal transition-all"> <img${addAttribute(avatar, "src")}${addAttribute(name, "alt")} class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"> </div> <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-aimara-teal transition-colors"> ${name} </h3> <span class="text-sm text-gray-500 dark:text-gray-400"> ${description} </span> </a>`)} </div> </div>`;
  })} </div> </section>`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/components/landing/detallemiembros.astro", void 0);

const $$Miembros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "AiMara Lab" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Equipo", $$Detallemiembros, {})} ` })}`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/pages/miembros.astro", void 0);

const $$file = "/Users/honorio/Honorio/Webs/aimaralab/src/pages/miembros.astro";
const $$url = "/miembros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Miembros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
