import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import styles from "./FooterStyle.module.css";

function Footer() {
  return (
    <section className={styles.FooterWrapper} id="contact">
      {/* First list of contacts */}
      <ul className={styles.LinkList}>
        <div className={styles.LinkColumn}>
          <h4 className={styles.LinkTitle}>Call</h4>
          <a className={styles.LinkItem} href="tel:306-715-1318">
            306-715-1318
          </a>
        </div>
        <div className={styles.LinkColumn}>
          <h4 className={styles.LinkTitle}>Email</h4>
          <a className={styles.LinkItem} href="mailto:ry.trampe@gmail.com">
            ry.trampe@gmail.com
          </a>
        </div>
      </ul>
      <p className={styles.Slogan}>Contact me!</p>
      {/* Container for Social media icons */}
      <div className={styles.SocialIconContainer}>
        <div className={styles.CompanyContainer}></div>
        <div className={styles.SocialContainer}>
          <a className={styles.SocialIcons} href="https://github.com/ryan-trampe">
            <AiFillGithub size="3rem" />
          </a>
          <a
            className={styles.SocialIcons}
            href="https://www.linkedin.com/in/ryan-trampe-5960591b7/"
          >
            <AiFillLinkedin size="3rem" />
          </a>
          <a className={styles.SocialIcons} href="https://www.instagram.com/coldlikeice101/">
            <AiFillInstagram size="3rem" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
