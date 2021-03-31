import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Content from "./content";

export default function ContentRow(props) {
  var settings = {
    slidesToShow: 3.1,
    slidesToScroll: 1,
    arrows: true,
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
          width: 84%;
          margin: auto;
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
}
