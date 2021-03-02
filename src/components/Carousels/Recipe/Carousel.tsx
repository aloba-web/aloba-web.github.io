import React from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import Card from "../../Card";
import { recipes } from "../../../pages/Recipes/recipesMock";

const Carousel: React.FC = () => {
  let dragging = false;
  const settings = {
    autoplay: false,
    arrows: true,
    afterChange: () => (dragging = false),
    beforeChange: () => (dragging = true),
    centerMode: true,
    centerPadding: "32px",
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const history = useHistory();
  const onSlideClick = (path: string) => {
    history.push(path);
  };

  return (
    <Slider className="recipe-carousel" {...settings}>
      {recipes.map((recipe) => (
        <button
          className="carousel-item"
          onClick={() => !dragging && onSlideClick(`/recipe/${recipe.id}`)}
        >
          <Card
            key={recipe.id}
            img={recipe.image}
            alt="food-dish"
            title={recipe.title}
          />
        </button>
      ))}
    </Slider>
  );
};

export default Carousel;
