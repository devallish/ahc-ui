import React from "react";
import styles from "./site-layout.module.scss";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import MainMenu from "../../menu/main/main-menu";
import { BrowserRouter } from "react-router-dom";
import Routes from "../../routes/routes";
import { mainRoutes } from "../../../shared/routes/main-routes";

const SiteLayout = () => {
  return (
    <div className={styles.outer_container}>
      <header className={styles.header_container}>
        <Header><h1>Animal Healthcare - Administration</h1></Header>
      </header>
      <section className={styles.content_container}>
        <BrowserRouter>
          <section className={styles.main_menu_container}>
            <MainMenu routes={mainRoutes} />
          </section>
          <section className={styles.page_container}>
            <Routes routes={mainRoutes} />
          </section>
        </BrowserRouter>
      </section>
      <footer className={styles.footer_container}>
        <Footer />
      </footer>
    </div>
  );
};

export default SiteLayout;
