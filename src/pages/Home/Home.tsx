import React from "react";

import "./Home.scss";
import { CarouselIntro, CarouselRecipe } from "../../components/Carousels";
import Products from "../../components/ProductsCards";
import { ReactComponent as Leaf } from "../../assets/leaf.svg";
import useFetch from "../../hooks/fetch/useFetch";
import { PAGE } from "..";
import About from "./About";
import What from "./What";
import { Home } from "../../hooks/fetch/fetchTypes";
import PageWrapper from "../PageWrapper";
import { createMarkup } from "../../utils/utils";

const ProductsContainer: React.FC<{ title: string }> = ({ title }) => (
  <div className="products-home container">
    <span dangerouslySetInnerHTML={createMarkup(title)} />
    <Products />
  </div>
);

const HomePage = () => {
  const { complete, data } = useFetch({ page: PAGE.HOME });

  if (!data || !complete) {
    return null;
  }

  const {
    carousel: carouselItems,
    whatIsAloba,
    ourProducts,
    imageDividerFirst,
    imageDividerSecond,
    aboutUs,
  } = data as Home;

  return (
    <PageWrapper>
      <div className="home">
        {carouselItems && <CarouselIntro carouselItems={carouselItems} />}
        <What
          title={whatIsAloba?.title}
          subTitle={whatIsAloba?.subTitle}
          text={whatIsAloba?.text}
        />
        {imageDividerFirst && (
          <img
            className="image-divider"
            src={imageDividerFirst.imageUrl}
            alt="divider"
          />
        )}
        <ProductsContainer title={ourProducts?.title || ""} />
        {imageDividerSecond && (
          <img
            className="image-divider"
            src={imageDividerSecond.imageUrl}
            alt="divider"
          />
        )}
        <About title={aboutUs?.title} text={aboutUs?.text} />
        <CarouselRecipe />
        <Leaf className="icon-divider" />
      </div>
    </PageWrapper>
  );
};

export default HomePage;
