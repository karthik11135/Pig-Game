import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={classes.navbar}>
      
        <img src="https://surge.nitt.edu/Public/Images/Socio%20white.png" />

        <div className={classes.links}>
          <a href="#home">Home</a>
          <a href="#slider">Reviews</a>
          <a href="#form">Write to us</a>
          <a href="#footer">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
