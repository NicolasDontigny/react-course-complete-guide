import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  const onChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.children}</label>
      <input
        type={props.type}
        id={props.id}
        min={props.min || 0}
        value={props.value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
