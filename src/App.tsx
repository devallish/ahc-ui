import React from "react";
import styles from "./app.module.scss";
import Layout from "./parts/layout/layout";
import RoutesContextProvider from "./shared/routes/routes-context-provider";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <RoutesContextProvider>
        <Layout />
      </RoutesContextProvider>
    </div>
  );
};

export default App;
