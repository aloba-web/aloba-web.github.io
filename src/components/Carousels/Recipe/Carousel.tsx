import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import tempImage from "../../../assets/temp.jpeg";
import Card from "../../Card";

const carouselItems: Array<{ image: string; text: string; title: string }> = [
  {
    image: tempImage,
    title: "Receptet",
    text:
      "Viste du att alger i våra hav binder",
  },
  {
    image: tempImage,
    text: "Helo där",
    title: "Receptet 2",
  },
];

const Carousel: React.FC = () => {
  var settings = {
    autoplay: false,
    arrows: true,
    centerMode: true,
    centerPadding: '32px',
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className="recipe-carousel" {...settings}>
      {carouselItems.map((item, index) => (
        <div className="carousel-item">
          <Card
            key={index}
            img={item.image}
            alt="food-dish"
            text={item.text}
            title={item.title}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
