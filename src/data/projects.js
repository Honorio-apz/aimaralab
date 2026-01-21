export const PROJECTS = [
  {
    short_title: "AiMara Translator",
    short_description: "Project focused on the generation of data corpora in native Peruvian languages, such as Quechua and Aymara, for the development of AI models capable of translating, recognizing audios and generating audio content in these languages.",
    image: "/traductor.png",
    app: "AiMara Translator App",
    link_ver_detalle: "/projects/neural-machine-translation",

    large_title: "Nueral Machine Translation for Native Peruvian Languages",
    date: "September, 2025",
    imagenes_cuerpo: [
      "/traductor.png",
      "/traductor.png"
    ],
    texto_blog: `
        <strong>Bridging Worlds: The Story of the AiMara Translator Project</strong><br><br>
        The Neural Machine Translation for Native Peruvian Languages project was born from a deeply personal mission. It was initiated by member of AiMara Lab, both systems and computer engineers deeply rooted in the Aymara culture, whose native language is Aymara. Their vision was to build a bridge between their ancestral heritage and the forefront of technological evolution.<br><br>
        What began as a personal initiative has since grown into a collaborative movement, attracting more individuals passionate about a shared goal: translating the Aymara language for a global audience. Our mission is twofold: to ensure the Aymara community is an active participant in the digital age, and to develop practical solutions that directly benefit native communities.<br><br>

        <strong>From Theory to Practice: Our Technology</strong><br><br>
        Our progress is built on a solid foundation of cutting-edge research. The current translator prototype was developed using principles from the seminal papers that power modern AI:<br><br>
        - <i>"Attention is All you Need"</i> - Vaswani, et al. (2017)<br>
        - <i>"Effective Approaches to Attention-based Neural Machine Translation"</i> - Luong, et al. (2015)<br><br>
        This approach has yielded promising results, validated by standard industry metrics such as BLEU, ROUGE, and METEOR. The prototype is a tangible result of our dedicated work.<br><br>
        <a href="https://translate.aimaralab.com/" target="_blank" class="blog-button">Try the AiMara Translator Prototype : https://translate.aimaralab.com/</a>
        <br><br>

        <strong>SITA: The Heart of Our Corpus Creation</strong><br><br>
        To power our models, we developed a comprehensive system for corpus creation and validation, named SITA. This integrated platform allows us to upload sentences in Spanish (currently with a Peruvian context), which are then presented to human translators. Our registered translators can provide accurate Aymara translations and, crucially, record voice audio for each phrase. This audio data is a vital component for our future Speech-to-Text projects.<br><br>
        <a href="https://sita.aimaralab.com/" target="_blank" class="blog-button">Explore the SITA Platform: https://sita.aimaralab.com/</a>
        <br><br>

        <strong>Fueling the Future: The Peruvian Data Initiative</strong><br><br>
        A robust translation model requires a vast and diverse dataset. To that end, AiMara Lab is actively recovering and structuring data from various Peruvian contexts, including news, health, education, and legal sectors. This initiative ensures we have a rich, relevant, and extensive data foundation to be translated into Aymara, making our models more accurate and useful.<br><br>
        <a href="https://datos.aimaralab.com/" target="_blank" class="blog-button">View Our Data Initiative Progress: https://datos.aimaralab.com/</a>
        <br><br>

        <strong>Building the Future, Together</strong><br><br>
        This project is more than just code; it's a commitment to cultural preservation and digital inclusion. We are continuously working to improve our models, expand our datasets, and build new tools for the Aymara community and the world.
        `,
    project_links: [
      {
        text: "Try the AiMara Translator Prototype",
        url: "https://translate.aimaralab.com/"
      },
      {
        text: "Explore the SITA Platform",
        url: "https://sita.aimaralab.com/"
      },

    ]

  },
  {
    short_title: "AiMara Chatbots",
    short_description: "A project focused on creating specific data corpora according to needs and creating chatbots with artificial intelligence models to optimize administrative processes in public and private institutions.",
    image: "/chat.png",
    app: "AiMara Chat App",

    project_links: [
      {
        text: "Try the AiMara Chatbot Prototype",
        url: "https://chat.aimaralab.com/"
      }
    ]
  },

  {
    short_title: "AiMara Legal",
    short_description: "Project aimed at developing an artificial intelligence model that fully understands the Peruvian legal framework, facilitating access to justice in an equitable manner and without discrimination.",
    image: "/legal.png"
  },
  {
    short_title: "AiMara Corpus",
    short_description: "A project dedicated to the collection, processing, and structuring of a vast data corpus within a Peruvian context. It spans various domains such as news, jurisprudence, culture, education, health and others.",
    image: "/corpus.png",
    app: "AiMara Data Dashboard",

    project_links: [
      {
        text: "View Our Data Initiative Progress",
        url: "https://datos.aimaralab.com/"
      }
    ]
  }
];