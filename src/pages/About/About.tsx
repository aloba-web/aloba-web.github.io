import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FoodTruck from "../../assets/food-truck-min.jpg";
import "./About.scss";

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <img className="image-divider" src={FoodTruck} alt="divider" />
        <div className="about-text container">
          <h1>Om oss och vår filosofi</h1>
          <p>
            Vi är en spridd skara av entreprenörer och forskare som brinner för
            matinnovation. Vi har en bakgrund och erfarenhet från bland annat
            Oatly, Mat.se, Santa Maria och algodling i Norge. Hållbart och
            hälsosamt, plantbaserade nordiska råvaror från hav och land – och
            framförallt en matupplevelse utöver det vanliga. Det var ledorden
            när vi började att utveckla Aloba i slutet av 2019. I ett litet kök
            strax utanför Båstad skred vi till verket och började utveckla,
            provsmaka och testa – nya recept, nya ingredienser och nya
            kombinationer. Om och om igen. Nu, många tester och provsmakningar
            senare är vi nöjda och det är dags för Aloba att möta en bredare
            publik. Nyfiken på namnet Aloba? Bland ingredienserna hittar du
            alger (sockertång), havre och korn som också är grunden till namnet
            på konceptet; från engelskans algae-oats-barley – Aloba! Aloba
            tillagas i Sverige, närmare bestämt i Skåne. Bakom varumärket Aloba®
            står det nybildade bolaget Aloba Foods AB, med bas på Ideon i Lund.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
