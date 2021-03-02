import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FoodTruck from "../../assets/food-truck.jpg";
import "./About.scss";

export interface RecipeObj {
  id: string;
  image: string;
  ingredients: Array<string>;
  ingress: string;
  steps: Array<string>;
  title: string;
}

const About: React.FC = () => {
  return (
    <div className="about">
      <Navbar />
        <img className="image-divider" src={FoodTruck} alt="divider" />
      <div className="container">
        <p>
          Välsmakande, enkelt att tillaga och god konsistens – självklart. Men
          vi  är också besjälade av hälsa. Därför har valt råvaror med omsorg
          och som  har goda egenskaper. I den blå regnskogen, i havet utanför
          Trondheim,  odlar och skördar vi Saccharina latissima, en alg som ofta
          kallas  sockertång. Den är laddad med allt från mineraler och
          vitaminer till  omega-3 och jod. Tillsammans med rotfrukter, korn,
          quinoa, kikärtor samt  inte minst havre med sina superfibrer,
          betaglukanerna, har vi utvecklat  ett nytt plantbaserat matkoncept –
          Aloba.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
