export const EVENTOS = [
  {
    title: "AiMARA SUMMIT 2025 - Artificial Intelligence Meeting for Applied Research in the Americas",
    date: "10 july 2025",
    time: "15:00 – 20:00",
    location: "Auditorio EPISI, UNAM, Ilo",
    image: [
      "../../portada_eventos/aimara2025.png",
      "../../portada_eventos/aimara20252.png",
      "../../portada_eventos/aimara20253.png"
    ],
    description: "AiMARA SUMMIT 2025 – Artificial Intelligence Meeting for Applied Research in the Americas is an academic event aimed at bringing artificial intelligence closer to students, educators, and professionals in the southern region of the country through lectures, hands-on workshops, and interactions with national and international experts, fostering education, innovation, and the growth of an active AI community.",
    agenda: [
      {
        hour: "15:00 – 15:30",
        activity: "Registration.",
        speaker: "Organicer."
      },
      {
        hour: "15:30 – 16:15",
        activity: "To be confirmed.",
        speaker: "To be confirmed."
      },
      {
        hour: "16:15 – 17:00",
        activity: "Presentation topic: to be announced...",
        speaker: "Israel Chaparro"
      },
      {
        hour: "17:00 – 17:20",
        activity: "[Coffee Break]"
      },
      {
        hour: "17:20 – 18:30",
        activity: "Comparando Humanos y Sistemas de Inteligencia Artificial en el contexto de Conducción Autónoma con data de Perú.",
        speaker: "Arturo Deza"
      }
      // ...más actividades
    ],
    taller: [
      { hour: "09:00 – 12:00", activity: "Fundamentos de Deep Learning (NVIDIA DLI Workshop)" , speaker: "Israel Chaparro"},
      { hour: "14:00 – 18:00", activity: "Entrenando Redes Neuronales para clasificar imagenes" , speaker: "Arturo Deza"},
      // ...más actividades
    ],
    organizers: [
      { name: "AiMara Lab", logo: "../../public/logo/logo_color.png" },
      { name: "Grupo de investigacion de IA", logo: "../../public/logo/logo_episi.png" },
      { name: "IINDEP UNAM", logo: "../../public/logo/logo_unam.png" }
    ],
    registration: {
      url: "/eventos/aimara2025",
      label: "Register here"
    },
    registration2: {
      url: "https://forms.gle/2seppm2JE6BDN25o6",
      label: "Register here"
    },
    speakers: [
      {
        name: "Ph.d. Arturo Deza",
        bio: "Co-Founder & CEO @ Artificio",
        topic: "Peruvian researcher and entrepreneur specializing in artificial intelligence, computer vision, and perceptual psychology. He is currently the CEO and Co-Founder of Artificia, an R&D company based in Lima focused on data and model licensing for the autonomous driving industry. He holds a Ph.D. in Dynamical Neuroscience from UCSB and has conducted postdoctoral research at MIT and Harvard University. Awarded the prestigious EB-1A Green Card for extraordinary scientific ability.",
        photo: "../../speackers/arturodeza.jpg"
      },
      {
        name: "Ph.d. Israel Chaparro",
        bio: "RENACYT | NVIDIA DLI Instructor & Ambassador ",
        topic: "Is a leading expert in Artificial Intelligence, Algorithms, and Deep Learning. As a Platinum Certified Instructor in NVIDIA’s Deep Learning Institute (DLI) Ambassador Program, he delivers free, instructor-led workshops that empower academic communities. His work as a researcher in Applied Data Science and Deep Learning reflects a strong commitment to advancing AI knowledge and making it accessible to all.",
        photo: "../../speackers/israelchaparro.jpeg"
      }
    ]
  },







  {
    title: "Natural Language Processing and Artificial Intelligence Seminar",
    date: "10 de diciembre de 2025",
    time: "10:00 – 12:00",
    location: "Auditorio EPISI, UNAM, Ilo",
    image: "../../portada_eventos/nlp_seminar.png",
    description: "Natural Language Processing and Artificial Intelligence Seminar is proposed as a space for learning, exchange, and discussion, aimed at students, professors, and the general public interested in exploring these technologies. This seminar will bring together prominent national experts who will share their experiences, research findings, and practical applications, focusing on the specific challenges and opportunities of our country. \n The objective of the event is to raise awareness and train attendees on the impact of NLP and AI in various fields, promoting the development of research projects and technological applications that address local and international challenges.",
    agenda: [
      { hour: "10:00 – 10:30", activity: "Análisis de Características MGC y UGC para Estimar Nivel de Aceptación en el sector Inmobiliario	" },
      { hour: "10:30 – 10:00", activity: "Modelos Neuronales de Traducción Automatica para las Lenguas Nativas" },
      { hour: "12:00 – 12:00", activity: "Estudio Infodemiológico de Covid-19 Usando Minería de Datos y Procesamiento de Lenguaje Natural " }
      // ...más actividades
    ],
    
    organizers: [
      "AiMara Lab",
      "Grupo de investigacion de IA",
      "IINDEP UNAM"
    ],
    registration: {
      url: "/eventos/nlp",
      label: "Register here"
    },
    speakers: [
      {
        name: "Dr. Pedro Shiguihara",
        bio: "St. Ignatius of Loyola University",
        topic: "Data Science, Machine Learning, Probabilistic Graphical Models, BioNLP",
        photo: "../../speackers/pedro.png"
      },
      {
        name: "Msc. Honorio Apaza",
        bio: "National University of Moquegua ",
        topic: "IEEE Senior Member | LQA Reviewer at Venga Global | Professor at UNAM",
        photo: "../../speackers/honorio.png"
      },
      {
        name: "Dr. Anibal Flores",
        bio: "National University of Moquegua",
        topic: "Principal Professor | IA Researcher",
        photo: "../../speackers/anibalflores.jpeg"
      }
    ]
  },






  {
    title: "SIMBig 2024 11th International Conference on Information Management and Big Data",
    date: "November 20 - 22 2024",
    time: "08:00 – 19:00",
    location: "Auditorio de EPISI, UNAM",
    image: "/evento-nlp.png",
    description: "SIMBig is one of the first conferences in Latin America grouping areas such as Artificial Intelligence, Machine Learning, Deep Learning, Healthcare Informatics, Natural Language Processing, Semantic Web, Software Engineering, among others.",
    agenda: [
      { hour: "15:00 – 15:30", activity: "Introducción a PLN" },
      { hour: "15:30 – 17:00", activity: "Hands-on: Transformers" }
    ],
    organizers: [
      "AiMara Lab",
      "E.P. Ingeniería de Sistemas e Informática",
      "Universidad Nacional de Moquegua"
    ],
    registration: {
      url: "https://simbig.org/SIMBig2024/",
      label: "Inscribirse"
    },
    speakers: [
      {
        name: "Mg. Carlos Quispe",
        bio: "Especialista en PLN, AiMara Lab.",
        topic: "Procesamiento de Lenguaje Natural en la práctica",
        photo: "/ponente3.jpg"
      }
    ]
  },







  
  // Puedes agregar más eventos
];
