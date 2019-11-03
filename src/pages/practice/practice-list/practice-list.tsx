import React, { useState } from 'react'
import styles from "./practice-list.module.scss";
import Search from "../../../parts/search/search";
import Header from "../../../parts/header/header";
import Table from "../../../parts/table/table";
import { SearchResults, searchForPractice } from "../../../services/practice-service";

const PracticeList = () => {

  const [searchResults, setSearchResults] = useState<SearchResults | undefined>(undefined);

  function onPracticeSearch(searchValue: string) {
    const searchResults = searchForPractice(searchValue);
    setSearchResults(searchResults);
  }

  return (
    <div className={styles.outer_container}>
      <div className={styles.header_container}>
        <Header><h2>Practices</h2></Header>
      </div>
      <div className={styles.search_container}>
        <Search onSearch={onPracticeSearch} />
      </div>
      <div className={styles.results_container}>
        {searchResults && 
          <Table columns={searchResults.namedProperties} rows={searchResults.instances} />
        }
      </div>
    </div>
  )
}

export default PracticeList
