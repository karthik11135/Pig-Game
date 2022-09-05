import React from "react";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
      <div id={props.id} className={classes.home}>
        <div className={classes["home-wrapper"]}>
          <div className={classes["home-content"]}>
            <div className={classes["content-box"]}>
              <h1>Surge_NITT</h1> <br />
              <p>powerful</p>
            </div>
            <div className={classes["home-image"]}>
              <img src="https://surge.nitt.edu/Public/Images/Screenshot_2022-01-03-21-48-46-68_1c337646f29875672b5a61192b9010f9.jpg" />
            </div>
          </div>
        </div>
      </div>

  );
};

export default Home;

//
