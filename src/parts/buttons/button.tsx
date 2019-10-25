import React, { useLayoutEffect, useState } from "react";
import styles from "./button.module.scss";

export type NamedStyles = "Standard" | "Primary";

interface ButtonProps {
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  style?: NamedStyles
}
const Button = (props: ButtonProps) => {
  const [styleClassName, setStyleClassName] = useState(styles.standard_button);
  useLayoutEffect(() => {
    if (props.style && props.style === "Primary"){
      setStyleClassName(styles.primary_button);
    }
  }, [])
  return <button className={styleClassName} onClick={props.onClickHandler}>{props.children}</button>
};

export default Button;
