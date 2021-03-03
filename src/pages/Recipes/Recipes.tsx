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
          <h1>Recept & Inspiration</h1>
          <p>
            Här samlar vi recept som kittlar dina smaklökar och vidgar ditt
            smakspektrum. Såväl till vardags som till fest! Recepten är
            vegetariska och ofta med en liten twist. Men inget är heligt, använd
            Aloba hur du vill. Och dela gärna med dig om du använder Aloba på
            något nytt sätt.
          </p>
        </div>
        <div className="recipe-cards">
          {fetchedRecipes.map((recipe) => (
            <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
              <Card img={recipe.image} alt="recipe" title={recipe.title} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recipes;
