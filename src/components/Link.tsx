import { Link as ScrollLink } from "react-scroll";

import styles from "./Link.module.css";
import { LinkProps } from "../lib/types";
import { useLangContext } from "../context/LangContext";

const Link = ({ link }: { link: LinkProps }) => {
  const { lang } = useLangContext();

  return (
    <ScrollLink
      to={link.href}
      spy
      smooth
      activeClass={styles.active}
      className={styles.link}
    >
      {link.label[lang]}
    </ScrollLink>
  );
};

export default Link;
