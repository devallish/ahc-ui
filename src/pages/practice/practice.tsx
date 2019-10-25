import React from "react";
import styles from "./practice.module.scss";
import Search from "../../parts/search/search";

const Practice = () => {
  return <div className={styles.outer_container}>
    <div className={styles.header_container}>
      <h2>Pets and Vets - Andover Clinic</h2>
    </div>
    <div className={styles.search_container}>
      <Search />
    </div>
  </div>
};

export default Practice;
