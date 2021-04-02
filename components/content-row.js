import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Content from "./content";
import ContentRowStyle from "./content-row.module.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={ContentRowStyle.arrow}
      style={{ transform: "rotate(225deg)", left: "100%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={ContentRowStyle.arrow}
      style={{ transform: "rotate(45deg)", left: "-1%" }}
      onClick={onClick}
    />
  );
}

export default function ContentRow(props) {
  var settings = {
    slidesToShow: 3.1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="content-row">
      <h2 className="content-header">{props.title}</h2>
      <Slider {...settings}>
        <Content
          link="/wandavision"
          alt="Wandavision"
          src="/images/WandaVision.jpeg"
          serviceSrc="/images/DisneyPlusLogo.svg"
          serviceAlt="Disney"
        />
        <Content
          link="/wandavision"
          alt="Wandavision"
          src="/images/WandaVision.jpeg"
          serviceSrc="/images/DisneyPlusLogo.svg"
          serviceAlt="Disney"
        />
        <Content
          link="/wandavision"
          alt="Wandavision"
          src="/images/WandaVision.jpeg"
          serviceSrc="/images/DisneyPlusLogo.svg"
          serviceAlt="Disney"
        />
        <Content
          link="/wandavision"
          alt="Wandavision"
          src="/images/WandaVision.jpeg"
          serviceSrc="/images/DisneyPlusLogo.svg"
          serviceAlt="Disney"
        />
      </Slider>
      <style jsx>{`
        .content-row {
          width: 90%;
          margin: auto;
          margin-top: 30px;
        }
        h2 {
          margin-left: 10px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
