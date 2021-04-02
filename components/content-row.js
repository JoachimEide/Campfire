import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Content from "./content";
import ContentRowStyle from "./content-row.module.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={ContentRowStyle.backgroundFadeRight}>
      <div
        className={ContentRowStyle.arrow}
        style={{ transform: "rotate(225deg)" }}
        onClick={onClick}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { currentSlide, onClick } = props;
  if (currentSlide === 0) {
    return false;
  } else {
    return (
      <div className={ContentRowStyle.backgroundFadeLeft}>
        <div
          className={ContentRowStyle.arrow}
          style={{ transform: "rotate(45deg)", left: "-2%" }}
          onClick={onClick}
        />
      </div>
    );
  }
}

export default function ContentRow(props) {
  var settings = {
    slidesToShow: 3.2,
    slidesToScroll: 1,
    infinite: false,
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
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
