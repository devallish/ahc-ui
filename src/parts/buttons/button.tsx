import React, { useLayoutEffect, useState } from "react";
import styles from "./button.module.scss";

export type NamedStyles = "Standard" | "Primary";

interface ButtonProps {
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  namedStyle?: NamedStyles
}
const Button = (props: ButtonProps) => {
  const [styleClassName, setStyleClassName] = useState(styles.standard_button);
  useLayoutEffect(() => {
    if (props.namedStyle && props.namedStyle === "Primary"){
      setStyleClassName(styles.primary_button);
    }
  }, [props.namedStyle])
  return <button className={styleClassName} onClick={props.onClickHandler}>{props.children}</button>
};

export default Button;
