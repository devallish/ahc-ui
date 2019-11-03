import React, { useState } from "react";
import styles from "./search.module.scss";
import Button from "../buttons/button";
import Input from "../inputs/input";

interface SearchProps {
  onSearch: (searchValue: string) => void;
}

const Search = (props: SearchProps) => {

  const [searchValue, setSearchValue] = useState("");

  function onClickHandler() {
    props.onSearch(searchValue);
  }
  function onSearchInputChange(e: React.FormEvent<HTMLInputElement>){
    setSearchValue(e.currentTarget.value);
  }

  return <div className={styles.outer_container}>
    <div className={styles.input_container}>
      <Input inputType={"search"} onChange={onSearchInputChange} onBlur={()=>{}} value={searchValue}/>
    </div>
    <div className={styles.button_container}>
      <Button namedStyle="Primary" onClickHandler={onClickHandler} >Search</Button>
    </div>
  </div>;
};

export default Search;
