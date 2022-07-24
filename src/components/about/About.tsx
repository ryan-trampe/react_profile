import React from "react";

import styles from "./AboutStyle.module.css";

function About(props: any) {
  return (
    <section className="GlobalSection">
      <h2 className="SectionTitle">About me</h2>
      <p className={styles.AboutText}>
        Hello! My name is Ryan and I enjoy
      </p>
    </section>
  );
}

export default About;
