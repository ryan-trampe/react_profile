import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import styles from "./HeaderStyle.module.css";

function Header() {
  return (
    <div className={styles.Container}>
      <div className={styles.Div1}>
        <a href="#home" style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem"></DiCssdeck>
          <span>Portfolio</span>
        </a>
      </div>
      <div className={styles.Div2}>
        <li>
          <Link href="#tech">
            <a className={styles.NavLink}>Tech</a>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <a className={styles.NavLink}>About</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a className={styles.NavLink}>Contact</a>
          </Link>
        </li>
      </div>
      <div className={styles.Div3}>
        <a className={styles.SocialIcons}>
          <AiFillGithub size="3rem"></AiFillGithub>
        </a>
        <a className={styles.SocialIcons}>
          <AiFillLinkedin size="3rem"></AiFillLinkedin>
        </a>
        <a className={styles.SocialIcons}>
          <AiFillInstagram size="3rem"></AiFillInstagram>
        </a>
      </div>
    </div>
  );
}

export default Header;
