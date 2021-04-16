import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "./review";
import ReviewRowStyle from "./review-row.module.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={ReviewRowStyle.backgroundFadeRight}>
      <div
        className={ReviewRowStyle.arrow}
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
      <div className={ReviewRowStyle.backgroundFadeLeft}>
        <div
          className={ReviewRowStyle.arrow}
          style={{ transform: "rotate(45deg)", left: "-2%" }}
          onClick={onClick}
        />
      </div>
    );
  }
}

export default function ContentRow(props) {
  var settings = {
    slidesToShow: 2.3,
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
        <Review
          key={1}
          link={`/series/mandalorian`}
          alt="Mandalorian"
          src="/images/mandalorian/Mandalorian.jpg"
          score={10}
          reviewText="This is a review!"
        />
        <Review
          key={1}
          link={`/series/mandalorian`}
          alt="Mandalorian"
          src="/images/mandalorian/Mandalorian.jpg"
          score={10}
          reviewText="This is a review!"
        />
        <Review
          key={1}
          link={`/series/mandalorian`}
          alt="Mandalorian"
          src="/images/mandalorian/Mandalorian.jpg"
          score={10}
          reviewText="This is a review!"
        />
        <Review
          key={1}
          link={`/series/mandalorian`}
          alt="Mandalorian"
          src="/images/mandalorian/Mandalorian.jpg"
          score={10}
          reviewText="This is a review!"
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
