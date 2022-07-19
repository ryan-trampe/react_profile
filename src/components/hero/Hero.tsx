import React from "react";

import Button from "../button/Button";
import styles from "./HeroStyle.module.css";

function Hero(props:any) {
  return (
    <section className="GlobalSection">
      <div className={styles.LeftSection}>
        <h2 className="SectionTitle">
          Welcome to <br />
          My Personal Portfolio
        </h2>
        <p className="SectionText">
          This has all my personal information, portfolio work and personal projects.
        </p>
        <Button onClick={props.handleClick}>Learn More</Button>
      </div>
    </section>
  );
}

export default Hero;
