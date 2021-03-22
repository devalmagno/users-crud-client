import React from "react";

import TableItem from "../TableItem";

import styles from "../../../styles/tablelist.module.css";

const TableList = () => {
  return (
    <table className={styles.content_table}>
      <thead>
        <tr>
          <th>NOME</th>
          <th className={styles.mobile}>EMAIL</th>
          <th>CPF</th>
          <th className={styles.mobile}>CLIENTE DESDE</th>
          <th>STATUS</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
    
    <TableItem />
    
    </table>
  );
};

export default TableList;
