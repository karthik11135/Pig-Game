import React from "react";
import classes from "./Form.module.css";
import Button from "../resources/Button";

const Form = (props) => {
  return (
    <form>
      <div id={props.id} className={classes["form-wrapper"]}>
        <h1 className={classes["form-title"]}>Write about Us!!</h1>
        <input className={classes.input} type="text" placeholder="Your Name" />
        <input className={classes.input} type="text" placeholder="Your Email" />
        <input
          className={`${classes.input} ${classes.description}`}
          type="text"
          placeholder="Description"
        />
        <Button className={classes.submit}>Submit</Button>
      </div>
    </form>
  );
};

export default Form;
