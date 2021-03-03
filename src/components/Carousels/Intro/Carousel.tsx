import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import Hero from "../../../assets/aloba-table-filter-desktop.jpg";
import Ocean from "../../../assets/ocean-desktop.jpg";
import Oats from "../../../assets/oat-desktop.jpg";

const carouselItems: Array<{ backgroundImage: string; text: string }> = [
  {
    backgroundImage: Ocean,
    text:
      "Alger från de kalla och rena haven utanför Trondheim i Norge. Svensk havre, korn och quinoa – Välkommen att njuta av Alobas burgare och färs – när du vill vara hälsosam mot dig själv, och planeten vi lever på…",
  },
  {
    backgroundImage: Oats,
    text:
      "Alger från de kalla och rena haven utanför Trondheim i Norge. Svensk havre, korn och quinoa – Välkommen att njuta av Alobas burgare och färs – när du vill vara hälsosam mot dig själv, och planeten vi lever på…",
  },
  {
    backgroundImage: Hero,
    text:
      "Äntligen! Nu lanserar vi Aloba - ett nytt plantbaserat matkoncept som kombinerar smak och hälsa med utvalda nordiska råvaror. 100% plantbaserat. Och riktigt gott.",
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
            style={{
              backgroundPosition: "bottom",
              backgroundImage: `url(${item.backgroundImage})`,
            }}
          >
            <span className="text" style={{fontWeight: "bold"}}>{item.text}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
