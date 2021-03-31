import React from "react";
import { useParams } from "react-router-dom";
import useFetch, { POST_TYPE } from "../../hooks/fetch/useFetch";
import { Recipe } from "../../hooks/fetch/fetchTypes";
import { createMarkup } from "../../utils/utils";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import "./Recipe.scss";
import PageWrapper from "../PageWrapper";

interface RouteParams {
  id: string;
}

export interface RecipeObj {
  id: string;
  image: string;
  ingredients: Array<string>;
  ingress: string;
  steps: Array<string>;
  title: string;
}

const RecipePage: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const { complete, data } = useFetch({
    postType: POST_TYPE.RECIPES,
    slug: id,
  });

  if (!complete && !data) return <Spinner />;

  const [{ image, title, ingress, ingredients, directions }] = data as Recipe[];

  return (
    <PageWrapper>
      <div className="recipe">
        <img className="image-header" src={image} alt="divider" />
        <div className="content-wrapper container">
          <div>
            <h1>{title}</h1>
            <p dangerouslySetInnerHTML={createMarkup(ingress)} />
          </div>
          <div>
            <h2>Ingredienser</h2>
            <p dangerouslySetInnerHTML={createMarkup(ingredients)} />
          </div>
          <div>
            <h2>Gör så här</h2>
            <p dangerouslySetInnerHTML={createMarkup(directions)} />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default RecipePage;
