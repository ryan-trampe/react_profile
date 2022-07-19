import React from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer"
import styles from "./LayoutStyle.module.css";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.Container}>
      <Header />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;