import React from "react";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import useFetch, { POST_TYPE } from "../../hooks/fetch/useFetch";
import PAGE from "../pageNames";
import { Recipe, RecipesPage } from "../../hooks/fetch/fetchTypes";
import { createMarkup } from "../../utils/utils";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import "./Recipes.scss";
import PageWrapper from "../PageWrapper";

const Recipes: React.FC = () => {
  const { complete, data } = useFetch({ postType: POST_TYPE.RECIPES });

  if (!complete || !data) return <Spinner />;

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

  if (!complete || !data) return <Spinner />;
  const { title, ingress } = data as RecipesPage;

  return (
    <PageWrapper>
      <div className="recipes">
        <div className="head">
        <span dangerouslySetInnerHTML={createMarkup(title)} />
          <span dangerouslySetInnerHTML={createMarkup(ingress)} />
        </div>
        <Recipes />
      </div>
    </PageWrapper>
  );
};

export default RecipesPageComponent;
