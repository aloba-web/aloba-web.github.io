import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./Home.scss";
import { CarouselIntro, CarouselRecipe } from "../../components/Carousels";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FoodTruckHeroes from "../../assets/food-truck-heroes-min.jpg";
import Salad from "../../assets/salad-min.jpeg";
import Card from "../../components/Card";
import { ReactComponent as Leaf } from "../../assets/leaf.svg";
import { productsDataMock } from "../Products/Products";

const What: React.FC = () => {
  const history = useHistory();
  return (
    <div className="what">
      <h2>Vad är Aloba?</h2>
      <span>100% plantbaserat</span>
      <p>
        Låt dina smaklökar kittlas av utvalda nordiska  råvaror i form av
        burgare eller färs - helt fri från soja - och tillagad i Sverige. Du
        hittar Aloba i frysdisken i välsorterade matbutiker. 100% plantbaserat.
        Och riktigt gott.
      </p>
      <button onClick={() => history.push("/products")} className="link-button">
        Våra produkter
      </button>
    </div>
  );
};

const ProductsContainer: React.FC = () => (
  <div className="products">
    <h1>Våra produkter</h1>
    {productsDataMock.map((product) => (
      <Link
        style={{ maxWidth: "300px" }}
        key={product.id}
        to={`/products/${product.id}`}
      >
        <Card
          img={product.image}
          title={product.title}
          text={product.description}
          alt={product.title}
        />
      </Link>
    ))}
  </div>
);

const Story: React.FC = () => {
  const history = useHistory();
  return (
    <div className="story">
      <h2>Om oss och vår filosofi</h2>
      <p>
        Hållbart och hälsosamt, plantbaserade nordiska råvaror från hav och land
        – och framförallt en matupplevelse utöver det vanliga. Det var ledorden
        när vi började att utveckla Aloba i slutet av 2019.
      </p>
      <button onClick={() => history.push("/about")} className="link-button">
        Om oss
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
        <img className="image-divider" src={Salad} alt="divider" />
        <ProductsContainer />
        <img className="image-divider" src={FoodTruckHeroes} alt="divider" />
        <Story />
        <CarouselRecipe />
        <Leaf className="icon-divider" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
