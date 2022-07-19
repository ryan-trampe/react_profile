import React from "react";

import styles from "./ButtonStyle.module.css";

// TODO: Button props has any type, need to change in the future
function Button(props: any) {
  return (
    <div className={styles.ButtonBack}>
      <button className={styles.ButtonFront} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
}

export default Button;
