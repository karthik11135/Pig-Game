import React from "react";
import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={classes.aboutus}>
      <div className={classes["aboutus-wrapper"]}>
        <div className={classes["aboutus-content"]}>
          <div>
            <h2>Why are we the best?</h2>
            <p>
              We are a young enthusiastic student community with a common
              inclination towards social interaction, human behavior, social
              causes, and all other sorts of things.
            </p>
            <h4>Our zeal defines us</h4>
            <p>
              To empower diverse individuals and Incentivize them to Learn, Like
              and Lead.
            </p>
          </div>
        </div>
        <div className={classes["aboutus-images"]}>
          <img
            className={classes.img1}
            src="https://surge.nitt.edu/Public/Images/IMG-20210322-WA0025.jpg"
          />
          <img src="https://surge.nitt.edu/Public/Images/IMG-20210322-WA0057.jpg" />
          <img src="https://surge.nitt.edu/Public/Images/IMG-20210428-WA0007.jpg" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
