import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import { links } from "../lib/data";
import Link from "./Link";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const refMenu = useRef<HTMLDivElement>(null);
  const refBars = useRef<HTMLDivElement>(null);

  const renderedLinks = links.map((link) => (
    <Link key={link.href} link={link} />
  ));

  const handleWindowScroll = () => {
    if (activeMenu) {
      setActiveMenu(false);
    }
  };

  const handleClickMenuOut = (e: MouseEvent) => {
    if (!refMenu.current || !refBars.current) return;
    if (
      !refMenu.current?.contains(e.target as Node) &&
      !refBars.current?.contains(e.target as Node)
    ) {
      setActiveMenu(false);
      e.stopPropagation();
    }
  };

  const handleBarsClick = () => {
    setActiveMenu(!activeMenu);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleWindowScroll, true);
    document.addEventListener("click", handleClickMenuOut, true);

    return () => {
      document.removeEventListener("scroll", handleWindowScroll, true);
      document.removeEventListener("click", handleClickMenuOut, true);
    };
  });

  return (
    <header className={styles.header}>
      <ScrollLink to="home" smooth className={styles.logoLink}>
        Portfolio<span className={styles.logoDot}>.</span>
      </ScrollLink>
      <nav className={styles.nav}>{renderedLinks}</nav>
      <div ref={refBars} className={styles.bars} onClick={handleBarsClick}>
        <FaBars />
      </div>
      {activeMenu && (
        <div ref={refMenu} className={styles.mobileMenu}>
          {renderedLinks}
        </div>
      )}
    </header>
  );
};

export default Header;
