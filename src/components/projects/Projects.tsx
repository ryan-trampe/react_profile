import React from "react";
import Image from "next/image";

import styles from "./ProjectsStyle.module.css";

function Projects() {
  const projectList = [
    {
      title: "Accelerometer Tracking",
      description:
        "Using A Tiva C series microcontroller, this device tracks the orientation of an object.",
      tags: ["C", "Tiva C Series microcontroller"],
      source: "https://github.com/ryan-trampe/accelerometer_track",
      id: 0,
    },
    {
        title: "Fostr",
        description:
          "Web application child adoption solution for the browser. Shows a database of children for adoption and foster-parents looking to adopt",
        tags: ["HTML", "Python (Django)", "Bootstrap", "Docker/Docker-Compose"],
        source: "https://github.com/ryan-trampe/fostr_python",
        id: 1,
      },
      {
        title: "Custom Microprocessor",
        description:
          "Simulated 8-bit microprocessor with custom instruction. Custom components include program counter, instruction decoder, and program sequencer.",
        tags: ["Quartus","SystemVerilog"],
        source: "https://github.com/ryan-trampe/accelerometer_track",
        id: 2,
      },
      {
        title: "Bug Tracker",
        description:
          "Recreation of  a bug-tracker that includes user login. ",
        tags: ["NodeJS", "ReactJS", "MongoDB"],
        source: "https://github.com/ryan-trampe/bug-tracker/tree/main/src",
        id: 3,
      },
  ];

  return (
    <section style={{ padding: 0 }} className="GlobalSection">
      <div className="SectionDivider" />
      <h2
        style={{
          fontSize: "65px",
          lineHeight: "72px",
          padding: "58px 0 16px",
        }}
        className="SectionTitle"
      >
        Projects
      </h2>
      <section className={styles.GridContainer}>
        {projectList.map((p, i) => {
          return (
            <div className={styles.BlogCard} key={i}>
              <Image alt="Picture" src="/pic0.png" width={100} height={100} objectFit="cover" />
              <div className={styles.TitleContent}>
                <h3 className={styles.HeaderThree}>{p.title}</h3>
                <hr className={styles.Hr} />
              </div>
              <p className={styles.CardInfo}>{p.description}</p>
              <div>
                <div className={styles.TitleContent}>Stack</div>
                <ul className={styles.TagList}>
                  {p.tags.map((t, i) => {
                    return (
                      <li className={styles.Tag} key={i}>
                        {t}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <ul className={styles.UtilityList}>
                <a className={styles.ExternalLink} href={p.source}>
                  Source
                </a>
              </ul>
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default Projects;
