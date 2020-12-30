import React from "react";
import "./Home.scss";
import Carousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import tempImage from "../../assets/temp.jpeg";
import Card from "../../components/Card";
import { ReactComponent as SimplySmashing } from "../../assets/simply-smashing.svg";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Carousel />
      <div className="container">
        <div className="what">
          <h2>Vad är Aloba?</h2>
          <span>Simply smashing food</span>
          <p>
            Tristique sodales fusce purus sed massa mauris, turpis commodo.
            Iaculis bibendum eleifend idesbibendum dictum aliquam. Maecenas sed
            augue semper adipiscing. Eros, tempus mauris ornare.
          </p>
        </div>
        <img className="image-divider" src={tempImage} alt="divider" />
        <div className="products">
          <h2>Något om produkter</h2>
          <Card img={tempImage} text="Bild och produkttext" alt="produkt" />
        </div>
        <SimplySmashing className="simply-smashing" />
        <img className="image-divider" src={tempImage} alt="divider" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
