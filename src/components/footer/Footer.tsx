import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import styles from "./FooterStyle.module.css";

function Footer() {
  return (
    <section className={styles.FooterWrapper}>
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
      {/* Container for Social media icons */}
      <div className={styles.SocialIconContainer}>
        <div className={styles.CompanyContainer}>
          <p className={styles.Slogan}>Innovating one project at a time</p>
        </div>
        <div className={styles.SocialContainer}>
          <a className={styles.SocialIcons}>
            <AiFillGithub size="3rem" />
          </a>
          <a className={styles.SocialIcons}>
            <AiFillLinkedin size="3rem" />
          </a>
          <a className={styles.SocialIcons}>
            <AiFillInstagram size="3rem" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
