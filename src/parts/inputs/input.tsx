import React, { useLayoutEffect, useState } from "react";
import styles from "./input.module.scss";

interface InputProps {
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FormEvent<HTMLInputElement>) => void;
  inputType?: InputType;
}
export type InputType = "date" | "email" | "month" | "number" | "password" | "search" | "tel" | "text" | "url" | "week";

const Input = (props: InputProps) => {
  const [inputType, setInputType] = useState<InputType>("text");
  useLayoutEffect(() => {
    if (props.inputType){
      setInputType(props.inputType);
    }
  }, [])
  return <input className={styles.input} type={inputType} onChange={props.onChange} onBlur={props.onBlur} />;
};
export default Input;
