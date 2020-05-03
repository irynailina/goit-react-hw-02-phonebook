import React from "react";
import styles from './filter.module.css'

const Filter = ({ value, onChangeFilter }) => (
  <>
  <div className={styles.findWrap}>
    <label className={styles.search}>Find contacts by name:</label>
    <input className={styles.searchInput}
      // type={type}
      value={value}
      onChange={onChangeFilter}
    ></input>
    </div>
  </>
);

export default Filter;
