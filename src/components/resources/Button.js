import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {

  const btnClass = props.className;

  return (
    <button className={`${btnClass} ${classes.button}`}>{props.children}</button>
  )
}

export default Button