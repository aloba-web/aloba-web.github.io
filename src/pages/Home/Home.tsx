import React from "react";
import "./Home.scss";
import { CarouselIntro, CarouselRecept } from "../../components/Carousels";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import tempImage from "../../assets/temp.jpeg";
import Card from "../../components/Card";
import { ReactComponent as SimplySmashing } from "../../assets/simply-smashing.svg";
import { ReactComponent as Leaf } from "../../assets/leaf.svg";

const What: React.FC = () => (
  <div className="what">
    <h2>Vad är Aloba?</h2>
    <span>Simply smashing food</span>
    <p>
      Tristique sodales fusce purus sed massa mauris, turpis commodo. Iaculis
      bibendum eleifend idesbibendum dictum aliquam. Maecenas sed augue semper
      adipiscing. Eros, tempus mauris ornare.
    </p>
  </div>
);

const Story: React.FC = () => (
  <div className="story">
    <h2>Story och sånt</h2>
    <p>
      Est pellentesque nisl habitasse enim pellentesque aliquam. Scelerisque a
      auctor massa dolor id ultricies scelerisque feugiat. Maecenas leo, morbi
      sagittis ultricies suspendisse erat dictumst Et vulputate odio sagittis,
      congue amet, hendrerit dignissim cras. Egestas vehicula lectus faucibus
      diam, sed non, fames ac lobortis. Enim orci sed convallis cursus sit
      molestie consectetur eget “At malesuada eu hendrerit arcu diam lacus, in.
      Lacus tincidunt orci nec enim vel porttitor cras sit nec.”
    </p>
  </div>
);

// const Recept: React.FC = () => (
//   <Carousel />
// );

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <CarouselIntro />
      <div className="container">
        <What />
        <img className="image-divider" src={tempImage} alt="divider" />
        <div className="products">
          <h2>Något om produkter</h2>
          <Card img={tempImage} text="Bild och produkttext" alt="produkt" />
        </div>
        <SimplySmashing className="icon-divider" />
        <img className="image-divider" src={tempImage} alt="divider" />
        <Story />
        <img className="image-divider" src={tempImage} alt="divider" />
        <CarouselRecept />
        <Leaf className="icon-divider" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
