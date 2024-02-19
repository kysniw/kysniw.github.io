type Lang = {
  pl: string;
  en: string;
};

export type LinkProps = {
  href: string;
  label: Lang;
};

export type ProjectProps = {
  name: string;
  image: string;
  descriptionText: Lang;
  stack: string[];
  github: string;
  demo: string | null;
};

export type EducationBarProps = {
  period: string;
  headText: Lang;
  centerText?: Lang;
  locationText: Lang;
};
