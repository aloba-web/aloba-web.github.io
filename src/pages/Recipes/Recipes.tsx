import React from "react";
import Navbar from "../../components/Navbar";
import "./Recipes.scss";
import { recipes } from "./recipesMock";
import { RecipeObj } from "../Recipe/Recipe";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Recipes: React.FC = () => {
  const fetchedRecipes: Array<RecipeObj> = recipes;

  return (
    <>
      <Navbar />
      <div className="recipes">
        <div className="head">
          <h1>Recept</h1>
          <p>
            Tristique sodales fusce purus sed massa mauris, turpis commodo.
            Iaculis bibendum eleifend ides.
          </p>
        </div>
        <div className="recipe-cards">
          {fetchedRecipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`}>
              <Card img={recipe.image} alt="recipe" text={recipe.title} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recipes;