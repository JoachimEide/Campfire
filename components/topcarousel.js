import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Titlecard from "./titlecard";

export default function Topcarousel() {
  var settings = {
    className: "center",
    centerMode: true,
    dots: true,
    slidesToShow: 1.72,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          marginTop: "10px",
          width: "7px",
          height: "7px",
          border: "1px solid white",
          opacity: 0.5,
          borderRadius: "50%",
        }}
      ></div>
    ),
  };
  return (
    <div className="title-container">
      <Slider {...settings}>
        <Titlecard
          link="/wandavision"
          alt="wandavision"
          src="/images/WandaVision.jpeg"
        />
        <Titlecard
          link="/wandavision"
          alt="wandavision"
          src="/images/WandaVision.jpeg"
        />
        <Titlecard
          link="/wandavision"
          alt="wandavision"
          src="/images/WandaVision.jpeg"
        />
        <Titlecard
          link="/wandavision"
          alt="wandavision"
          src="/images/WandaVision.jpeg"
        />
        <Titlecard
          link="/wandavision"
          alt="wandavision"
          src="/images/WandaVision.jpeg"
        />
      </Slider>
      <style jsx>{`
        .title-container {
          width: 84%;
          margin: auto;
        }
      `}</style>
    </div>
  );
}