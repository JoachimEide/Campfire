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
  const dataFilterCallback = (
    param,
    paramValue,
    param2 = false,
    paramValue2 = false,
    arrayParam = []
  ) => {
    if (arrayParam.length) {
      return arrayParam;
    }
    let data = props.contentArray.filter((content) => {
      if (param === "genre") {
        if (param === "genre" && param2 && paramValue2) {
          return (
            content[param].includes(paramValue) &&
            content[param2] === paramValue2
          );
        }
        return content[param].includes(paramValue);
      } else if (param === "id") {
        return paramValue.includes(content[param]);
      } else if (param2 && paramValue2) {
        return content[param] === paramValue && content[param2] === paramValue2;
      } else {
        return content[param] === paramValue;
      }
    });
    return data;
  };

  const filteredContent = dataFilterCallback(
    props.param,
    props.paramValue,
    props.param2,
    props.paramValue2,
    props.arrayParam
  );

  return (
    <div className="content-row">
      <h2 className="content-header">{props.title}</h2>
      <Slider {...settings}>
        {!props.continueWatching
          ? filteredContent.map(
              ({ id, title, slug, service, serviceLogo, thumbnailSrc }) => (
                <Content
                  key={id}
                  id={id}
                  link={`/series/${slug}`}
                  alt={title}
                  src={thumbnailSrc}
                  serviceSrc={serviceLogo}
                  serviceAlt={service}
                  history={props.history}
                  historyEvent={props.historyEvent}
                  subscriptions={props.subscriptions}
                  watchHistoryAll={filteredContent}
                />
              )
            )
          : filteredContent.map(
              ({ id, title, slug, service, serviceLogo, thumbnailSrc }) => (
                <Content
                  key={id}
                  id={id}
                  continueWatching={props.continueWatching}
                  link={`/series/${slug}`}
                  alt={title}
                  src={thumbnailSrc}
                  serviceSrc={serviceLogo}
                  serviceAlt={service}
                  history={props.history}
                  historyEvent={props.historyEvent}
                  subscriptions={props.subscriptions}
                  watchHistoryAll={filteredContent}
                />
              )
            )}
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
