import React, { createElement } from "react";
import { DiReact, DiDatabase, DiAws, DiBootstrap, DiCss3, DiDocker, DiDotnet, DiGit, DiHtml5, DiJavascript, DiLinux, DiMongodb, DiMysql, DiNodejs, DiPython, DiRasberryPi, DiUbuntu } from "react-icons/di";
import { GiCircuitry } from "react-icons/gi";
import { IconType } from "react-icons/lib";

import styles from "./TechStyle.module.css";

function Tech() {
  const techList: IconType[] = [
    DiReact,
    DiAws,
    DiBootstrap,
    DiCss3,
    DiDocker,
    DiDotnet,
    DiGit,
    DiHtml5,
    DiJavascript,
    DiLinux,
    DiMongodb,
    DiMysql,
    DiNodejs,
    DiPython,
    DiRasberryPi,
    DiReact,
    DiUbuntu
  ];

  return (
    <section className="GlobalSection">
      <div className="SectionDivide" />
      <h2 className="SectionTitle">Technologies</h2>
      <p className="SectionText">
        Here are the techonolgies I have worked with!
      </p>
      {/* Auto-scrolling carousel */}
      <div className={styles.CarouselWrapper}>
        <div className={styles.marquee}>
          {techList.map((icon, idx) => {
            return createElement("picture", {}, createElement(icon, { size: "8rem" }));
          })}
        </div>
      </div>

      <ul className={styles.ListMain}>
        {/* Front end item */}
        <li className={styles.ListItem}>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <div className={styles.ListContainer}>
            <h4 className={styles.ListTitle}> Front-end</h4>
            <p className={styles.ListParagraph}>
              React.js <br />
              Bootstrap
            </p>
          </div>
        </li>

        {/* Backend item */}
        <li className={styles.ListItem}>
          <picture>
            <DiDatabase size="3rem" />
          </picture>
          <div className={styles.ListContainer}>
            <h4 className={styles.ListTitle}> Back-end</h4>
            <p className={styles.ListParagraph}>
              Node.js
              <br />
              Next.js
              <br />
              Flask
              <br />
              Spring Boot
              <br />
              MySQL
              <br />
              MongoDB
            </p>
          </div>
        </li>

        {/* Embedded stuff */}
        <li className={styles.ListItem}>
          <picture>
            <GiCircuitry size="3rem" />
          </picture>
          <div className={styles.ListContainer}>
            <h4 className={styles.ListTitle}>Embedded Systems</h4>
            <p className={styles.ListParagraph}>
              C / C++ <br />
              SystemVerilog
              <br />
              TCP/IP Protocol <br />
              Communication Protocols (UART/I2C)
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Tech;
