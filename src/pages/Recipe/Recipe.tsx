import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
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

const Recipe: React.FC = () => {
  let { id } = useParams<RouteParams>();

  return (
    <div className="recipe">
      <Navbar />
      Recept {id}
    </div>
  );
};

export default Recipe;
