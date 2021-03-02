import React from "react";
import { useHistory } from "react-router-dom";

import "./Home.scss";
import { CarouselIntro, CarouselRecipe } from "../../components/Carousels";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FoodTruck from "../../assets/food-truck.jpg";
import Burger from "../../assets/aloba-burger.jpeg";
import BurgerProduct from "../../assets/aloba-produkt-burgare.jpg";
import MincedProduct from "../../assets/aloba-produkt-fars.jpg";
import Card from "../../components/Card";
import { ReactComponent as SimplySmashing } from "../../assets/simply-smashing.svg";
import { ReactComponent as Leaf } from "../../assets/leaf.svg";

const What: React.FC = () => {
  const history = useHistory();
  return (
    <div className="what">
      <h2>Vad är Aloba?</h2>
      <span>Nordiska råvaror från hav & land</span>
      <p>
        Välsmakande, enkelt att tillaga och god konsistens – självklart. Men vi 
        är också besjälade av hälsa.
      </p>
      <button onClick={() => history.push("/what")} className="link-button">
        Läs mer
      </button>
    </div>
  );
};

const Story: React.FC = () => {
  const history = useHistory();
  return (
    <div className="story">
      <h2>Om oss</h2>
      <p>
        Hållbart och hälsosamt, plantbaserade nordiska råvaror från hav och land
        – och framförallt en matupplevelse utöver det vanliga. Det var ledorden
        när vi  började att utveckla Aloba i slutet av 2019.
      </p>
      <button onClick={() => history.push("/about")} className="link-button">
        Läs mer
      </button>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <CarouselIntro />
      <div className="container">
        <What />
        <img className="image-divider" src={Burger} alt="divider" />
        <div className="products">
          <h2>Något om produkter</h2>
          <Card img={BurgerProduct} text="Bild och produkttext" alt="produkt" />
          <Card img={MincedProduct} text="Bild och produkttext" alt="produkt" />
        </div>
        <SimplySmashing className="icon-divider" />
        <img className="image-divider" src={FoodTruck} alt="divider" />
        <Story />
        <CarouselRecipe />
        <Leaf className="icon-divider" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
