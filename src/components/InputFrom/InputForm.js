import React from "react";

export default function InputFrom({ value, handleChange, placeholder, type, name }) {
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
