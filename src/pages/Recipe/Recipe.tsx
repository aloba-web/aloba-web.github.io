import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { recipes } from "../../pages/Recipes/recipesMock";
import "./Recipe.scss";

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

const getIngredients: React.FC<RecipeObj> = (recipe: RecipeObj) => (
  <div>
    <h2>Ingredienser</h2>
    <div className="list">
      {recipe?.ingredients.map((ingredient, index) => (
        <span key={index}>{ingredient}</span>
      ))}
    </div>
  </div>
);

const getSteps: React.FC<RecipeObj> = (recipe: RecipeObj) => (
  <div>
    <h2>Gör så här</h2>
    <div className="list">
      {recipe?.steps.map((step, index) => (
        <span key={index}>{step}</span>
      ))}
    </div>
  </div>
);

const Recipe: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const recipe = recipes.find((recipe) => recipe.id === id);

  return (
    <>
      <Navbar />
      <div className="recipe">
        <img className="image-header" src={recipe?.image} alt="divider" />
        <div className="content-wrapper">
          <div>
            <h1>{recipe?.title}</h1>
            <p>{recipe?.ingress}</p>
          </div>
          {recipe && getIngredients(recipe)}
          {recipe && getSteps(recipe)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recipe;
