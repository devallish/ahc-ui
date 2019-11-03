import React from "react";
import styles from "./app.module.scss";
import SiteLayout from "./parts/layouts/site/site-layout";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
        <SiteLayout />
    </div>
  );
};

export default App;
