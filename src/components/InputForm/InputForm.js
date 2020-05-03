import React from "react";
import styles from './inputForm.module.css'

export default function InputForm({ value, handleChange, placeholder, type, name }) {
  return (
    <input className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={handleChange}
    ></input>
  );
}
