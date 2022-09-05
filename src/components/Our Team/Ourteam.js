import React from "react";
import ProfileCard from "./ProfileCard";
import classes from "./Ourteam.module.css";

const MEMBERS = [
  {
    id: 1,
    src: "https://surge.nitt.edu/Public/members/tamaghna.jpg",
    name: "Tamagna Saha",
    position: "President",
  },
  {
    id: 4,
    src: "https://surge.nitt.edu/Public/members/WhatsApp%20Image%202022-01-04%20at%207.12.39%20PM%20-%20Akhil%20Chenna.jpeg",
    name: "Akhil",
    position: "Operation Head",
  },
  {
    id: 2,
    src: "https://surge.nitt.edu/Public/members/Thivyaa%20(2)%20-%20thivyaa%20M.png",
    name: "Thivyya M",
    position: "Marketing Head",
  },
  {
    id: 3,
    src: "https://surge.nitt.edu/Public/members/IMG_20211001_183719%20-%20Venkat%20Ram.jpg",
    name: "KVS Sairam",
    position: "Treasurer",
  },
  {
    id: 3,
    src: "https://surge.nitt.edu/Public/members/IMG_20211001_183719%20-%20Venkat%20Ram.jpg",
    name: "KVS Sairam",
    position: "Treasurer",
  },
];

const Ourteam = (props) => {
  return (
    <div id={props.id} className={classes.ourteam}>
      <div className={classes["ourteam-wrapper"]}>
        <div className={classes["ourteam-details"]}>
          <h1>Our Team Core</h1>
          <div className={classes.profiles}>
            {MEMBERS.map((eachData) => {
              return (
                <ProfileCard
                  key={eachData.id}
                  name={eachData.name}
                  src={eachData.src}
                  position={eachData.position}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
