import React from "react";

import styles from "./HeroStyle.module.css";

function Hero() {
  return (
    <section className="GlobalSection">
      <div className={styles.LeftSection}>
        <h2 className="SectionTitle">
          Welcome to <br />
          My Personal Portfolio
        </h2>
        <p className="SectionText">
          This has all my personal information and portfolio work and personal projects.
        </p>
      </div>
    </section>
  );
}

export default Hero;
