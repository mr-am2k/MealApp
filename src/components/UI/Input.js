import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} /> {/* Spread operator that will allow us to use all elements from the array */}
    </div>
  );
};

export default Input;
