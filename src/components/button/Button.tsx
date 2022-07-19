import React from "react";

import styles from "./ButtonStyle.module.css";

function Button(props:any) {
  <div className={styles.ButtonBack}>
    <button className={styles.ButtonFront} onClick={props.onClick}>
      {props.children}
    </button>
  </div>;
}

export default Button;
