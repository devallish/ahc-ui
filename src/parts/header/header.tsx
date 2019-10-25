import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return <div className={styles.outer_container}>
    <div className={styles.title_container}>
      <h1>Animal Health Care - Administration</h1>
    </div>
  </div>;
};

export default Header;
