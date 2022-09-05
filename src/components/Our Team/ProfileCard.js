import React from "react";
import classes from "./ProfileCard.module.css";
import { AiFillLinkedin } from "react-icons/ai";

const ProfileCard = (props) => {
  return (
    <div className={classes["profile-card"]}>
      <div className={classes["person-img"]}>
        <img src={props.src} />
      </div>
      <div className={classes["person-details"]}>
        <h2>{props.name}</h2>
        <h4>{props.position}</h4>
        <AiFillLinkedin size={40} style={{cursor: 'pointer', color: 'var(--secondary-color)'}} />
      </div>
    </div>
  );
};

export default ProfileCard;
