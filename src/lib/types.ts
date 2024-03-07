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

export type FormDataElements =
  | "fullName"
  | "email"
  | "phoneNumber"
  | "subject"
  | "message";

export interface FormDataProps {
  fullName: string;
  email: string;
  phoneNumber?: string;
  subject: string;
  message: string;
}
