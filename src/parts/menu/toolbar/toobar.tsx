import React from 'react'
import styles from "./toolbar.module.scss";
import { NavLink } from "react-router-dom";
import RouteInfo from "../../../shared/routes/route-info";

interface ToolbarProps {
  routes: RouteInfo[];
}

const Toolbar = (props: ToolbarProps) => {
  return (
    <nav>
      {props.routes.map((item, index) => (
        <NavLink
          className={styles.link}
          key={index}
          to={item.path}
          exact={item.exact}
          activeClassName={styles.active_link}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  )
}

export default Toolbar;
