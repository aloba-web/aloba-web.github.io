import React from "react";
import Navbar from "../../components/Navbar";
import "./Recipes.scss";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import useFetch, { POST_TYPE } from "../../hooks/fetch/useFetch";
import PAGE from "../pageNames";
import { Recipe, RecipesPage } from "../../hooks/fetch/fetchTypes";
import { createMarkup } from "../../utils/utils";

const Recipes: React.FC = () => {
  const { complete, data } = useFetch({ postType: POST_TYPE.RECIPES });

  if (!complete || !data) return <></>;

  const recipes = data as Array<Recipe>;

  return (
    <div className="recipe-cards">
      {recipes.map(({ id, image, title }) => (
        <Link key={id} to={`/recipes/${id}`}>
          <Card img={image} alt={`recipe-${title}`} title={title} />
        </Link>
      ))}
    </div>
  );
};

const RecipesPageComponent: React.FC = () => {
  const { complete, data } = useFetch({ page: PAGE.RECIPES });

  if (!complete || !data) return <></>;
  const { title, ingress } = data as RecipesPage;

  return (
    <>
      <Navbar />
      <div className="recipes">
        <div className="head">
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={createMarkup(ingress || "")} />
        </div>
        <Recipes />
      </div>
      <Footer />
    </>
  );
};

export default RecipesPageComponent;
