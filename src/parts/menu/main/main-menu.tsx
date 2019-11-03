import React from "react";
import styles from "./main-menu.module.scss";
import { NavLink } from "react-router-dom";
import RouteInfo from "../../../shared/routes/route-info";

interface MainMenuProps {
  routes: RouteInfo[]
}

const MainMenu = (props: MainMenuProps) => {
  
  return (
    <nav>
      {props.routes.map((route, index) => (
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
