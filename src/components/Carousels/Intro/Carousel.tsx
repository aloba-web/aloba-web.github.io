import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import tempImage from "../../../assets/temp.jpeg";

const carouselItems: Array<{ backgroundImage: string; text: string }> = [
  {
    backgroundImage: tempImage,
    text:
      "Viste du att alger i våra hav binder lika mycket koldioxid som alla världens träd?",
  },
  {
    backgroundImage: tempImage,
    text:
      "Helo",
  },
];

const Carousel: React.FC = () => {
  var settings = {
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className="carousel" {...settings}>
      {carouselItems.map((item, index) => (
        <div key={index}>
          <div
            className="carousel-item"
            style={{ backgroundImage: `url(${item.backgroundImage})` }}
          >
            <span>{item.text}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
