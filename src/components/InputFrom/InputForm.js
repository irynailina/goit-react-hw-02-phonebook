import React from "react";

export default function InputForm({ value, handleChange, placeholder, type, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={handleChange}
    ></input>
  );
}
