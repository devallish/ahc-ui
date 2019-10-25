import React from "react";
import styles from "./layout.module.scss";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainMenu from "../menu/main/main-menu";
import { BrowserRouter } from "react-router-dom";
import Router from "../router/router";

const Layout = () => {
  return (
    <div className={styles.outer_container}>
      <header className={styles.header_container}>
        <Header />
      </header>
      <section className={styles.content_container}>
        <BrowserRouter>
          <section className={styles.main_menu_container}>
            <MainMenu />
          </section>
          <section className={styles.page_container}>
            <Router />
          </section>
        </BrowserRouter>
      </section>
      <footer className={styles.footer_container}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
