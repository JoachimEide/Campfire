import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Titlecard from "./titlecard";

export default function Topcarousel(props) {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 500,
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
        {props.shows.map(({ id, link, alt, src }) => {
          return <Titlecard key={id} link={link} alt={alt} src={src} />;
        })}
      </Slider>
      <style jsx>{`
        .title-container {
          width: 90%;
          margin: auto;
        }
      `}</style>
    </div>
  );
}
