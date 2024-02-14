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

export const projects = [
  {
    name: "JobsPortal",
    image: "./projects/jobsportal.png",
    description:
      "This is project created in NextJS with TypeScript, TailwindCSS and " +
      "NextUI on frontend and django, django rest framework, swagger on " +
      "backend. It's inspired with portals with jobs offers.",
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
    image: "./projects/where2b.png",
    description:
      "Project created to credit course during stuides. Worked on frontend with ReactNative. " +
      "App for restaurant owner and their clients to find favourite food and book a seat.",
    stack: ["reactjs", "reactnative", "typescript", "django", "swagger"],
    github:
      "https://github.com/kysniw/WHERE2B/tree/restaurants-edit-frontend/client",
    demo: null,
  },
  {
    name: "ToDoApp",
    image: "./projects/todoapp.png",
    description:
      "This is project created in ReactJS with TypeScript, CSS and fake REST API json-server",
    stack: ["reactjs", "typescript", "css"],
    github: "https://github.com/kysniw/react-todoapp-wsb",
    demo: null,
  },
];
