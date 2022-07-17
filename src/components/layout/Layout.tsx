import React from "react";

import Header from "../header/Header";
import styles from "./LayoutStyles.module.css";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="Container">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;