import React from "react";

import styles from "./AboutStyle.module.css";

function About(props: any) {
  return (
    <section className="GlobalSection" id="about">
      <h2 className="SectionTitle">About me</h2>
      <p className={styles.AboutText}>
        Hello! My name is Ryan Trampe, an entry-level software engineer. I enjoy solving complicated
        problems and am always ready to learn about the newst cutting edge technologies.I am
        interested in both web development and embedded systems engineering. 
      </p>
    </section>
  );
}

export default About;
