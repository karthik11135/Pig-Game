import React from "react";
import classes from "./Footer.module.css";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = (props) => {
  return (
    <div id={props.id} className={classes.footer}>
      <div className={classes["footer-wrapper"]}>
        <div className={classes.logo}>
          <img src="https://surge.nitt.edu/Public/Images/Socio%20white.png" />
        </div>
        <div className={classes["contact-info"]}>
          <h2> Contact</h2>
          <p>NIT Trichy</p>
          <p>Phone: +91 7005253836</p>
          <p>Email: aiesec@nitt.edu</p>
        </div>
        <div className={classes["follow-us"]}>
            <h2>Linked IN</h2>
          <AiFillLinkedin
            size={40}
            style={{ cursor: "pointer", color: "var(--secondary-color)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
