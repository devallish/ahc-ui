import React from "react";
import styles from "./header.module.scss";

interface HeaderProps {
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return <div className={styles.outer_container}>
    <div className={styles.title_container}>
      {props.children}
    </div>
  </div>;
};

export default Header;
