import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import { CarouselItem } from "../../../hooks/fetch/fetchTypes";
import { createMarkup } from "../../../utils/utils";

export interface CarouselIntroProps {
  carouselItems: Array<CarouselItem>;
}

const Carousel: React.FC<CarouselIntroProps> = ({ carouselItems }) => {
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
            style={{
              backgroundPosition: "bottom",
              backgroundImage: `url(${item.imageUrl})`,
            }}
          >
            <span
              dangerouslySetInnerHTML={createMarkup(item?.text)}
              className="text"
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
