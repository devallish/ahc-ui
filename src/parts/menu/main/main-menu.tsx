import React from "react";
import styles from "./main-menu.module.scss";
import { useRoutesContext } from "../../../shared/routes/routes-context";
import { NavLink } from "react-router-dom";

const MainMenu = () => {
  const routing = useRoutesContext();
  return (
    <nav>
      {routing.map((route, index) => (
        <NavLink
          className={styles.link}
          key={index}
          to={route.path}
          exact={route.exact}
          activeClassName={styles.active_link}
        >
          {route.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default MainMenu;
