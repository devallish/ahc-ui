import React from "react";
import styles from "./practice.module.scss";
import { practiceRoutes } from "./routes/practice-routes";
import Routes from "../../parts/routes/routes";

const Practice = () => {

  return <div className={styles.outer_container}>
    <div className={styles.header_container}>
      
    </div>
    <div className={styles.routes_container}>
      <Routes routes={practiceRoutes} />
    </div>
  </div>
};

export default Practice;
