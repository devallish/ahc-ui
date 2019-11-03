import React from 'react'
import { PropertyInfo } from "../../services/practice-service"
import styles from "./table.module.scss";

interface TableProps{
  columns: PropertyInfo[],
  rows: any[]
}
const Table = (props: TableProps) => {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            {props.columns.map((column, index) => <th key={index}>{column.displayName}</th>)}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row, index) => 
            <tr key={index} className={ index % 2 === 0 ? styles.data_row : styles.alt_data_row } >
              {props.columns.map((column, index) => 
                <td key={index}>{row[column.name]}</td>)}
            </tr>
           )}
        </tbody>
      </table>
    </div>
  )
}

export default Table
