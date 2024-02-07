import { Link as ScrollLink } from "react-scroll";

import styles from "./Link.module.css";
import { LinkProps } from "../lib/types";

const Link = ({ link }: { link: LinkProps }) => {
  return (
    <ScrollLink
      to={link.href}
      spy
      smooth
      activeClass={styles.active}
      className={styles.link}
    >
      {link.label.en}
    </ScrollLink>
  );
};

export default Link;
