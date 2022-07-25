import React from "react";

import Button from "../button/Button";
import styles from "./HeroStyle.module.css";

function Hero(props:any) {
  return (
    <section className="GlobalSection" id="home">
      <div className={styles.LeftSection}>
        <p className="SectionText">
          Hello, my name is
        </p>
        <h2 className="SectionTitle">
          Ryan Trampe <br />
          Software Developer
        </h2>
        <p className={styles.SectionSubtext}>
          Web Design | Embedded Software 
        </p>
        <a href="/resume.pdf">
          <Button onClick={props.handleClick}>Resume</Button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
