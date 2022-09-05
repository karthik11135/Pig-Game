import React from "react";
import classes from "./Testimonial.module.css";
// import {FaQuoteRight} from '@react-icons';

import { AiFillTags } from "react-icons/ai";

const Testimonial = (props) => {
    const icon = {
        position: 'absolute',
        top: '-1.5rem',
        right: '-1rem',
        color: `var(--secondary-color)`,
    }
  return (
    <div className={classes.testimonial}>
      <div className={classes["testimonial-wrapper"]}>
        <img
          className={classes["face"]}
          src={props.src}
        />
        <div className={classes["quotation-box"]}>
        <AiFillTags size={50} style={icon} />
          <h2>{props.name}</h2>
          <p>{props.quote}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
