import React from "react";
import Image from "next/image";

import styles from "./ProjectsStyle.module.css";

function Projects() {
  const projectList = [
    {
      title: "Fostr",
      description:
        "Web application child adoption solution for the browser. Shows a database of children for adoption and foster-parents looking to adopt",
      tags: ["HTML", "Python (Flask)", "Bootstrap", "Docker/Docker-Compose"],
      source: "https://github.com/ryan-trampe/fostr_python",
      pic: "/pic1.png",
      id: 1,
    },
    {
      title: "Accelerometer Tracking",
      description:
        "Using A Tiva C series microcontroller, this device tracks the orientation of an object.",
      tags: ["C", "I2C", "Tiva C Series microcontroller"],
      source: "https://github.com/ryan-trampe/accelerometer_track",
      pic: "/pic0.png",
      id: 0,
    },
    {
      title: "Custom Microprocessor",
      description:
        "Simulated 8-bit microprocessor with custom instruction. Custom components include program counter, instruction decoder, and program sequencer.",
      tags: ["Quartus", "SystemVerilog"],
      source: "https://github.com/ryan-trampe/custom_micro",
      pic: "/pic2.png",
      id: 2,
    },
  ];

  return (
    <section style={{ padding: 0 }} className="GlobalSection" id="projects">
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
              {/* <Image alt="Picture" src={p.pic} width={100} height={100} objectFit="cover" /> */}
              <picture>
                <img alt="picture" className={styles.Img} src={p.pic} />
              </picture>
              <div className={styles.TitleContent}>
                <h3 className={styles.HeaderThree}>{p.title}</h3>
                <hr className={styles.Hr} />
              </div>
              <p className={styles.CardInfo}>{p.description}</p>
              <div>
                <div className={styles.CardSubtitle}>Stack</div>
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
