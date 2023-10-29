import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, onChangeFilter }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={(e) => onChangeFilter(e.target.value)}
      className={styles.input}
    />
  </label>
);

export default Filter;
