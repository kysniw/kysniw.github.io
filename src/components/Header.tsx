import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import { links } from "../lib/data";
import Link from "./Link";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa6";
import LangButton from "./LangButton";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const refMenu = useRef<HTMLDivElement>(null);

  const renderedLinks = links.map((link) => (
    <Link key={link.href} link={link} />
  ));

  const mobileLinks = links.map((link) => <Link key={link.href} link={link} />);

  const handleWindowScroll = () => {
    if (activeMenu) {
      setActiveMenu(false);
    }
  };

  const handleBarsClick = () => {
    setActiveMenu(!activeMenu);
  };

  useEffect(() => {
    const handleClickMenuOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (refMenu.current && !refMenu.current.contains(target)) {
        setActiveMenu(false);
      }
    };
    document.addEventListener("scroll", handleWindowScroll, true);
    document.addEventListener("pointerdown", handleClickMenuOut, true);

    return () => {
      document.removeEventListener("scroll", handleWindowScroll, true);
      document.removeEventListener("pointerdown", handleClickMenuOut, true);
    };
  });

  const classMobileMenu = activeMenu
    ? `${styles.mobileMenu} ${styles.show}`
    : `${styles.mobileMenu}`;

  return (
    <header className={styles.header}>
      <ScrollLink to="home" smooth className={styles.logoLink}>
        Portfolio<span className={styles.logoDot}>.</span>
      </ScrollLink>
      <div className={styles.menu}>
        <nav className={styles.nav}>{renderedLinks}</nav>
        <LangButton />
        <div ref={refMenu}>
          <div className={styles.bars} onPointerUp={handleBarsClick}>
            <FaBars />
          </div>
          <div className={classMobileMenu}>{mobileLinks}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
