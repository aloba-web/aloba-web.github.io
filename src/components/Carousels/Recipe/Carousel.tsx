import React from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";
import Card from "../../Card";
import useFetch, { POST_TYPE } from "../../../hooks/fetch/useFetch";
import { Recipe } from "../../../hooks/fetch/fetchTypes";

const Carousel: React.FC = () => {
  const { complete, data } = useFetch({ postType: POST_TYPE.RECIPES });
  let dragging = false;
  const settings = {
    autoplay: true,
    arrows: true,
    afterChange: () => (dragging = false),
    beforeChange: () => (dragging = true),
    centerMode: true,
    centerPadding: "32px",
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const history = useHistory();
  const onSlideClick = (path: string) => {
    history.push(path);
  };

  if (!complete || !data) return <></>;

  const recipes = data as Array<Recipe>;

  return (
    <Slider className="recipe-carousel" {...settings}>
      {recipes.map((recipe) => (
        <button
          key={recipe.id}
          className="carousel-item"
          onClick={() => !dragging && onSlideClick(`/recipes/${recipe.id}`)}
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
