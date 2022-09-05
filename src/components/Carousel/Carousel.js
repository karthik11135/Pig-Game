import React from "react";
import Carousel from "better-react-carousel";
import classes from "./Carousel.module.css";
import Testimonial from "./Testimonial/Testimonial";

const SLIDER_DATA = [
  {
    id: 1,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbsNK5BLX9lQgbH4Bmv9ODqdNyKSOUBby2Q&usqp=CAU",
    name: "Sara",
    quote:
      "Lorem ipsum as asldf awfehoai aosdhfoaisdjf asdh foiascoisd jfosof jss",
  },
  {
    id: 2,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwbY7kNk0U_tKux19D52m1bn6sbt8jF5e7g&usqp=CAU",
    name: "John",
    quote:
      "Lorem ipsum as asldf awfehoai aosdhfoaisdjf asdh foiascoisd jfosof jss",
  },
  {
    id: 3,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFN4T-iuVQH9peEppQNxftl9kYmMHM3BMq3w&usqp=CAU",
    name: "David",
    quote:
      "Lorem ipsum as asldf awfehoai aosdhfoaisdjf asdh foiascoisd jfosof jss",
  },
  {
    id: 4,
    src: "https://media.istockphoto.com/photos/portrait-of-a-young-woman-at-home-stock-photo-picture-id1415373844?b=1&k=20&m=1415373844&s=170667a&w=0&h=bnYiSC4g98K802VnTeVwBvHhGVfqhiGr0ACWsxegBCs=",
    name: "Sara",
    quote:
      "Lorem ipsum as asldf awfehoai aosdhfoaisdjf asdh foiascoisd jfosof jss",
  },
];

const Slider = (props) => {
  const carouselWrapper = {
    maxWidth: "110rem",
    width: "80%",
    margin: "4rem auto",
    padding: "2rem",
    // border: "8px solid black",
    backgroundColor: "var(--main-colour)",
    borderRadius: "9px",
    maxHeight: "25rem",
  };
  return (
    <div className={classes.slider} id={props.id}>
      <Carousel
        containerStyle={carouselWrapper}
        dotColorActive="#3a7563"
        showDots={true}
        loop
      >
        {SLIDER_DATA.map((eachData) => {
          return (
            <Carousel.Item>
              <Testimonial
                name={eachData.name}
                src={eachData.src}
                quote={eachData.quote}
                key={eachData.id}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
