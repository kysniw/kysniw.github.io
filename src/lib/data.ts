export const links = [
  {
    href: "about",
    label: {
      pl: "O mnie",
      en: "About",
    },
  },
  {
    href: "education",
    label: {
      pl: "Wykształcenie",
      en: "Education",
    },
  },
  {
    href: "projects",
    label: {
      pl: "Projekty",
      en: "Projects",
    },
  },
  {
    href: "contact",
    label: {
      pl: "Kontakt",
      en: "Contact",
    },
  },
];

export const aboutData = {
  texts: {
    title: {
      pl: "O mnie",
      en: "About me",
    },
    desc: {
      pl:
        "Cześć! Jestem absolwentem Politechniki Wrocławskiej, na której udało mi się uzyskać stopień magistra " +
        "inżyniera z Informatyki Stosowanej. Podczas studiów drugiego stopnia zawuażyłem, że najbardziej podoba mi się" +
        "programowanie w ReactJS. Stowrzyliśmy wtedy projekt w ReactNative na zaliczenie przedmiotu. Z drugiej strony" +
        "koledzy wciągneli mnie w Pythona. Dzięki temu napisałem magisterkę związaną z uczeniem maszynowym i jego możliwym" +
        "zastosowaniem w infrastrukturze kolejowej. Zacząłem również uczyć się Django i jego REST framework. Po studiach" +
        "poszedłem na studia podyplomowe z Angulara oraz ReactJS, co pozwoliło mi utwierdzić się w zamiłowaniu do React'a.\n" +
        "W wolnych chwilach bardzo lubię majsterkować przy samochodzie, składać i naprawiać komputery, grać w gry wideo oraz" +
        "rozszerzać moją największą pasję jaką jest kolej.",
      en:
        "Hi! I'm a graduate of Computer Science at Wroclaw University of Technology. During second-level studies," +
        " I realized that ReactJS is the library which I'm interested in. On the other side my friends introduced me to" +
        " the world of python. Then I wrote my master thesis using python for machine-learning libraries and started to work" +
        " with Django. After studies I tried Angular on post-graduate studies as well as I developed ReactJS skills.\n" +
        "In my spare time I repair and assemble computers, tinker with my car, play video games and travel by trains which are my biggest crush.",
    },
  },
};

export const projects = [
  {
    name: "JobsPortal",
    image: "./projects/jobsportal.webp",
    descriptionText: {
      pl:
        "Frontend projektu został stworzony w NextJS z użyciem TypeScript, TailwindCSS oraz NextUI, " +
        "natomiast do backendu użyto django, djangoRESTframework oraz swagger." +
        "Jest to projekt inspirowany portalami do szukania pracy, takimi jak JustJoinIT",
      en:
        "This is project created in NextJS with TypeScript, TailwindCSS and " +
        "NextUI on frontend and django, djangoRESTframework, swagger on " +
        "backend. It's inspired with portals with jobs offers.",
    },

    stack: [
      "nextjs",
      "typescript",
      "nextui",
      "tailwindcss",
      "django",
      "swagger",
    ],
    github: "https://github.com/kysniw/jobsportal-app",
    demo: null,
  },
  {
    name: "WHERE2B",
    image: "./projects/where2b.webp",
    descriptionText: {
      pl:
        "Projekt stworzony na studiach magisterskich w ramach projektu zespołowego w 4-osobowej grupie." +
        "Moim zadaniem był frontend w ReactNative. Aplikacja służy do wyszukiwania restauracji w okolicy z " +
        "ulubionym jedzeniem oraz umożliwia rezerwację miejsca.",
      en:
        "Project created to credit course during stuides. Worked on frontend with ReactNative. " +
        "App for restaurant owner and their clients to find favourite food and book a seat.",
    },

    stack: ["reactjs", "reactnative", "typescript", "django", "swagger"],
    github:
      "https://github.com/kysniw/WHERE2B/tree/restaurants-edit-frontend/client",
    demo: null,
  },
  {
    name: "ToDoApp",
    image: "./projects/todoapp.webp",
    descriptionText: {
      pl: "Jest to aplikacja stworzona na potrzeby zaliczenia przedmiotu z ReactJS na studiach podyplomowych.",
      en: "This is project created in ReactJS with TypeScript, CSS and fake REST API json-server",
    },

    stack: ["reactjs", "typescript", "css"],
    github: "https://github.com/kysniw/react-todoapp-wsb",
    demo: null,
  },
];

export const educationBars = [
  {
    period: "2022 - 2023",
    headText: {
      pl: "Studia podyplomowe związane z AngularJS i ReactJS ",
      en: "Post-graduate studies with AngularJS and ReactJS.",
    },
    locationText: {
      pl: "WSB Merito w Łodzi",
      en: "WSB Merito in Łódź",
    },
  },
  {
    period: "2021 - 2022",
    headText: {
      pl: "Stopień Magister Inżynier z Informatyki Stosowanej",
      en: "Master of Engineering degree in Applied Computer Science",
    },
    centerText: {
      pl: "Studia drugiego stopnia w dyscyplinie Informatyka Techniczna i Telekomunikacja",
      en: "Second-level studies in the discipline of Information And Communication Technology",
    },
    locationText: {
      pl: "Politechnika Wrocławska we Wrocławiu",
      en: "Politechnika Wrocławska in Wrocław",
    },
  },
  {
    period: "2017 - 2021",
    headText: {
      pl: "Stopień Inżyniera z Informatyki",
      en: "Engineering degree in Computer Science.",
    },
    centerText: {
      pl: "Studia pierwszego stopnia w dyscyplinie Informatyka Techniczna i Telekomunikacja",
      en: "First-level studies in the discipline of Information And Communication Technology",
    },
    locationText: {
      pl: "Politechnika Lubelska w Lublinie",
      en: "Politechnika Lubelska in Lublin",
    },
  },
];

export const contactData = {
  emptyForm: {
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  },
  texts: {
    title: {
      pl: "Kontakt",
      en: "Contact",
    },
    fullNamePlaceholder: {
      pl: "Imię i nazwisko",
      en: "Full Name",
    },
    emailPlaceholder: {
      pl: "Adres email",
      en: "Email Address",
    },
    phoneNumberPlaceholder: {
      pl: "Numer telefonu",
      en: "Mobile Number",
    },
    subjectPlaceholer: {
      pl: "Temat wiadomości",
      en: "Email Subject",
    },
    messagePlaceholder: {
      pl: "Treść wiadomości",
      en: "Your Message",
    },
    sendButton: {
      pl: "Wyślij",
      en: "Send message",
    },
    statusSuccess: {
      pl: "Wiadomość wysłana!",
      en: "Message sent!",
    },
    statusError: {
      pl: "Coś poszło nie tak, spróbuj później.",
      en: "Something went wrong, try again later.",
    },
  },
};
