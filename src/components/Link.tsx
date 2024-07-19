import { Link as ScrollLink } from "react-scroll";

import styles from "./Link.module.css";
import { LinkProps } from "../lib/types";
import { useLangContext } from "../context/LangContext";

interface LinkViewProps {
  link: LinkProps;
  className?: string;
  style?: React.CSSProperties;
}

const Link = ({ link, className, style }: LinkViewProps) => {
  const { lang } = useLangContext();

  return (
    <ScrollLink
      to={link.href}
      spy
      smooth
      style={style}
      activeClass={styles.active}
      className={`${styles.link} ${className}`}
    >
      {link.label[lang]}
    </ScrollLink>
  );
};

export default Link;
