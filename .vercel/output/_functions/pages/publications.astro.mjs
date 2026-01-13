/* empty css                                 */
import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DbVNoNJ_.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BzuV2yUc.mjs';
import { $ as $$Section } from '../chunks/Section_CkeZfoHm.mjs';
export { renderers } from '../renderers.mjs';

const $$Publications$1 = createComponent(($$result, $$props, $$slots) => {
  const papers = [
    {
      title: "Comparison of Neural Network Models for the Implementation of a Chatbot in the University Admission Process",
      authors: "Coaguila, Maribel E., Nina, Mariela M., Arocutipa, Yoselin D., Vel\xE1squez, Estrella D., Rocca, Jesus E., Apaza, Honorio",
      booktitle: "Information Management and Big Data",
      year: "2025",
      publisher: "Springer Nature Switzerland",
      doi: "10.1007/978-3-031-91428-7_13",
      abstract: "Universities face a growing demand for information during admission processes, leading to an administrative overload due to the large number of individual and in-person inquiries from applicants. This work proposes the development of a chatbot based on Natural Language Processing (NLP) to automate and optimize the management of inquiries in admission processes, taking the National University of Moquegua (UNAM), Peru, as a case study."
    },
    {
      title: "Prototype App Mobile for Real Time American Sign Language Recognition Based on Deep Learning",
      authors: "Ramirez, Sergio A., L. Ram\xEDrez, Mar\xEDa del Pilar, Tito, Euler, Apaza, Honorio",
      booktitle: "Intelligent Systems and Applications",
      year: "2024",
      publisher: "Springer Nature Switzerland",
      doi: "10.1007/978-3-031-47724-9_14",
      abstract: "The recognition of sign language alphabet through computer vision techniques has been widely studied. As a result of multiple studies, the CNN algorithm has demonstrated a very high learning rate. Other researchers have created and published a dataset consisting of approximately 200 images of static gestures of the American Sign Language alphabet. For this research work, the aforementioned dataset was used, and the gestures were captured and trained with CNN. Consequently, a significantly good recognition rate was achieved and migrated to a mobile application capable of recognizing the gestures."
    },
    {
      title: "Development of a Chatbot Prototype to Serve University Graduates in the Process of Obtaining Degrees and Professional Titles",
      authors: "Apaza, Honorio, Reynoso, Allison I., Balcona, Jamir E., Maquera, Seline M., Coaguila, Maribel E.",
      booktitle: "Intelligent Systems and Applications",
      year: "2024",
      publisher: "Springer Nature Switzerland",
      doi: "10.1007/978-3-031-66336-9_30",
      abstract: "This research proposes the development of a natural language processing (NLP) chatbot to accurately and efficiently answer questions from graduates of the Universidad Nacional de Moquegua (UNAM) about their degree and title requirements. The objective is to address the complexity and volume of university regulations that make it difficult for students to find accurate information, generating frustration and delays in the degree process."
    },
    {
      title: "NLP Models to Clarify Degree Regulations in Peruvian Universities",
      authors: "Apaza, Honorio, Balcona, Jamir E., Maquera, Seline M., Collanqui, Elmer A., Reynoso, Allison I., Coaguila, Maribel E.",
      booktitle: "2024 IEEE ANDESCON",
      year: "2024",
      publisher: "IEEE",
      doi: "10.1109/ANDESCON61840.2024.10755580",
      abstract: "Measurement, Accuracy, Natural languages, Semantics, Chatbots, Regulation, Real-time systems, Complexity theory."
    },
    {
      title: "Detection of Anemia Through Nail Images Using Convolutional Neural Networks",
      authors: "Ccaso, Ivan A., Arocutipa, Yoselin D., Chiuyari-Veramendi, Wilbur N., Franco Medina, Jorge L., Apaza Alanoca, Honorio",
      booktitle: "2024 IEEE ANDESCON",
      year: "2024",
      publisher: "IEEE",
      doi: "10.1109/ANDESCON61840.2024.10755798",
      abstract: "Performance evaluation, Pediatrics, Accuracy, Nails, Urban areas, Neural networks, Medical services, Convolutional neural networks."
    },
    {
      title: "Peruvian Sign Recognition (LSP) to the Native Quechua Language Using LSTM",
      authors: "Maquera, Seline M., Rocca, Jesus E., Apaza, Honorio, Yana, Victor, Silva, Carlos A.",
      booktitle: "2024 IEEE ANDESCON",
      year: "2024",
      publisher: "IEEE",
      doi: "10.1109/ANDESCON61840.2024.10755865",
      abstract: "Bridges, Sign language, Accuracy, Face recognition, Data preprocessing, Prototypes, Auditory system, Assistive technologies."
    },
    {
      title: "Implementation and Evaluation of Recurrent Neural Network Models for an Intelligent University Admission Chatbot",
      authors: "Vel\xE1squez, Estrella D., Coaguila, Maribel E., Apaza, Honorio, Yana, Victor, Silva, Carlos A.",
      booktitle: "2024 43rd International Conference of the Chilean Computer Science Society (SCCC)",
      year: "2024",
      publisher: "IEEE",
      doi: "10.1109/SCCC63879.2024.10767615",
      abstract: "Measurement, Technological innovation, Accuracy, Prototypes, Computer architecture, Chatbots, Market research, Regulation."
    },
    {
      title: "Neural Machine Translation for Aymara to Spanish",
      authors: "Alanoca, Honorio Apaza, Chahuares, Brisayda Aruhuanca, Caceres, Kewin Aroquipa, Saire, Josimar Chire",
      booktitle: "Intelligent Systems and Applications",
      year: "2023",
      publisher: "Springer International Publishing",
      doi: "10.1007/978-3-031-16075-2_19",
      abstract: "There are many native languages in Latin America, over the decades the number of speakers was reduced by the strong influence of the Spanish language. There is a continuous concern for the preservation of these languages, such as: Aymara, Quechua, Guaran\xED. To create Neural Machine Translator (NMT) models, there is no data set of translations from the native language Aymara - Spanish."
    },
    {
      title: "Neural Machine Translation for Native Language Aymara to English",
      authors: "Apaza, Honorio, Aruhuanca, Brisayda, Nina, Mariela M., Flores, Anibal, Silva, Carlos, Tito, Euler",
      booktitle: "Proceedings of the Future Technologies Conference (FTC) 2022, Volume 3",
      year: "2023",
      publisher: "Springer International Publishing",
      doi: "10.1007/978-3-031-18344-7_40",
      abstract: "In Latin America, there is a culture called Aymara, which has its own language also named Aymara. It is a native language in danger of extension declared by UNESCO and a heritage of the Peruvian nation. The work of Neural Machine Translator since its appearance has been able to translate many languages of the world, however it is not very well researched with native languages."
    },
    {
      title: "Job Recommendation Based on Curriculum Vitae Using Text Mining",
      authors: "Apaza, Honorio, Rubin de Celis Vidal, Am\xE9rico Ariel, Chire Saire, Josimar Edinson",
      booktitle: "Advances in Information and Communication",
      year: "2021",
      publisher: "Springer International Publishing",
      doi: "10.1007/978-3-030-73100-7_72",
      abstract: "During the last years, the development in diverse areas related to computer science and internet, allowed to generate new alternatives for decision making in the selection of personnel for state and private companies. In order to optimize this selection process, the recommendation systems are the most suitable for working with explicit information related to the likes and dislikes of employers or end users."
    },
    {
      title: "Data Augmentation for Short-Term Time Series Prediction with Deep Learning",
      authors: "Flores, Anibal, Tito-Chura, Hugo, Apaza-Alanoca, Honorio",
      booktitle: "Intelligent Computing",
      year: "2021",
      publisher: "Springer International Publishing",
      doi: "10.1007/978-3-030-80126-7_36",
      abstract: "In this paper, a hybrid data augmentation technique for short-term time series prediction is proposed in order to overcome the underfitting problem in deep learning models based on recurrent neural networks such as Long Short-Term Memory (LSTM) and Gated Recurrent Unit (GRU)."
    },
    {
      title: "Text Mining over Curriculum Vitae of Peruvian Professionals using Official Scientific Site DINA",
      authors: "Chire, Josimar, Apaza, Honorio",
      booktitle: "2020 International Computer Symposium (ICS)",
      year: "2020",
      publisher: "IEEE",
      doi: "10.1109/ICS51289.2020.00030",
      abstract: "Text mining, Integrated circuits, Filtering, Government, Data visualization, Continents, Task analysis, Text Mining, Data Science, Peru, South America, Natural Language Processing, Curriculum Vitae, Research."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "bg-gray-50 dark:bg-black/40" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16" data-aos="fade-up"> <h2 class="text-3xl md:text-4xl font-bold mb-4 font-display">
Recent <span class="text-gradient">Publications</span> </h2> <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
Our research impacts the scientific community. Explore our
                latest papers in AI, NLP, and Native Languages.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> ${papers.map((paper, index) => renderTemplate`<div class="bg-white dark:bg-space-900 border border-gray-100 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group" data-aos="fade-up"${addAttribute(index % 2 * 100, "data-aos-delay")}> <div class="flex items-start justify-between mb-4"> <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-aimara-teal/10 text-aimara-teal border border-aimara-teal/20"> ${paper.year} </span> <span class="text-xs text-gray-500 font-mono"> ${paper.publisher} </span> </div> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-aimara-teal transition-colors"> ${paper.title} </h3> <div class="mb-4 text-sm text-gray-600 dark:text-gray-400 italic"> ${paper.authors.split(", ").slice(0, 3).join(", ")} ${paper.authors.split(", ").length > 3 ? " et al." : ""} </div> <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-4"> ${paper.booktitle} </div> <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 mb-6"> ${paper.abstract} </p> <div class="flex items-center justify-end"> <a${addAttribute(`https://doi.org/${paper.doi}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:text-aimara-teal dark:hover:text-aimara-teal transition-colors">
Read Paper
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a> </div> </div>`)} </div> </div> ` })}`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/components/landing/Publications.astro", void 0);

const $$Publications = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Publications | AiMara Lab" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-24 lg:pt-32 pb-12"> ${renderComponent($$result2, "PublicationsList", $$Publications$1, {})} </div> ` })}`;
}, "/Users/honorio/Honorio/Webs/aimaralab/src/pages/publications.astro", void 0);

const $$file = "/Users/honorio/Honorio/Webs/aimaralab/src/pages/publications.astro";
const $$url = "/publications";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Publications,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
