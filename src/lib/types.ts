export type LinkProps = {
  href: string;
  label: {
    pl: string;
    en: string;
  };
};

export type ProjectProps = {
  name: string;
  image: string;
  description: string;
  stack: string[];
  github: string;
  demo: string | null;
};
