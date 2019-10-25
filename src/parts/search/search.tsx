import React from "react";
import styles from "./search.module.scss";
import Button from "../buttons/button";
import Input from "../inputs/input";

const Search = () => {
  return <div className={styles.outer_container}>
    <div className={styles.input_container}>
      <Input inputType={"search"} onChange={()=>{}} onBlur={()=>{}} value="a value"/>
    </div>
    <div className={styles.button_container}>
      <Button style={"Primary"} onClickHandler={()=>{}} >Search</Button>
    </div>
  </div>;
};

export default Search;
