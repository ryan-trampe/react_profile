import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FiFeather } from "react-icons/fi";

import styles from "./HeaderStyle.module.css";

function Header() {
  return (
    <div className={styles.Container}>
      <div className={styles.Div1}>
        <a href="#home" style={{ display: "flex", alignItems: "center", color: "white" }}>
          <FiFeather size="2rem"></FiFeather>
          <span>Ryan Trampe</span>
        </a>
      </div>
      <div className={styles.Div2}>
        <li>
          <Link href="#about">
            <a className={styles.NavLink}>About</a>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <a className={styles.NavLink}>Tech</a>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <a className={styles.NavLink}>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a className={styles.NavLink}>Contact</a>
          </Link>
        </li>
      </div>
      <div className={styles.Div3}>
        <a className={styles.SocialIcons} href="https://github.com/ryan-trampe">
          <AiFillGithub size="3rem"></AiFillGithub>
        </a>
        <a className={styles.SocialIcons} href="https://www.linkedin.com/in/ryan-trampe-5960591b7/">
          <AiFillLinkedin size="3rem"></AiFillLinkedin>
        </a>
        <a className={styles.SocialIcons} href="https://www.instagram.com/coldlikeice101/">
          <AiFillInstagram size="3rem"></AiFillInstagram>
        </a>
      </div>
    </div>
  );
}

export default Header;
