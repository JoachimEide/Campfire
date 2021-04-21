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
  const myReviewsFunc = () => {
    const myReviews = [];
    props.reviews.map((rev) => {
      let showData = props.contentArray.filter((show) => {
        return show.id === rev.id;
      });
      let reviewObject = {
        id: rev.id,
        title: showData[0].title,
        imgSrc: showData[0].thumbnailSrc,
        link: showData[0].slug,
        score: rev.score,
        reviewText: rev.reviewText,
      };
      myReviews.push(reviewObject);
    });
    return myReviews;
  };

  const reviews = myReviewsFunc();

  return (
    <div className="content-row">
      <h2 className="content-header">{props.title}</h2>
      <Slider {...settings}>
        {reviews.map((rev) => {
          return (
            <Review
              key={rev.id}
              link={`/series/${rev.slug}`}
              alt={rev.title}
              src={rev.imgSrc}
              score={rev.score}
              reviewText={rev.reviewText}
            />
          );
        })}
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
