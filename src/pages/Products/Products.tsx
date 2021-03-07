import React from "react";
import Footer from "../../components/Footer";
import ProductsCards from "../../components/ProductsCards";
import Navbar from "../../components/Navbar";
import BurgerProduct from "../../assets/aloba-produkt-burgare-min.jpg";
import MincedProduct from "../../assets/aloba-produkt-fars-min.jpg";
import "./Products.scss";


export interface Product {
  amount: string;
  title: string;
  description: string;
  disclaimers: Array<string>;
  image: string;
  ingredients: Array<string>;
  id: string;
  storage: string;
  nutritions: Array<{ name: string; amount: string }>;
}

export const productsDataMock: Array<Product> = [
  {
    amount: "4x100g",
    id: "burgare",
    title: "Plantbaserade burgare",
    image: BurgerProduct,
    nutritions: [
      {
        name: "Energi",
        amount: "149 kcal/625 kJ",
      },
      {
        name: "Fett",
        amount: "2,7 g",
      },
      {
        name: "Mättat fett",
        amount: "0,3 g",
      },
      {
        name: "Enkelomättat fett",
        amount: "1,0 g",
      },
      {
        name: "Fleromättat fett",
        amount: "1,1 g",
      },
      {
        name: "Kolhydrat",
        amount: "23,4 g",
      },
      {
        name: "Sockerarter",
        amount: "1,1 g",
      },
      {
        name: "Fiber",
        amount: "5,1 g",
      },
      {
        name: "Protein",
        amount: "10,3 g",
      },
      {
        name: "Salt",
        amount: "1,5 g",
      },
    ],
    ingredients: [
      "Ärtprotein",
      "Kikärter",
      "Korn*",
      "Morötter*",
      "Palsternacka*",
      "Lök",
      "Sockertång** (Saccharina latissima)",
      "Quinoa*",
      "Havre*",
      "Rapsolja",
      "Salt",
      "Metylcellulosa",
      "Rödbetspulver",
      "Potatis-stärkelse",
      "Jästextrakt",
      "Näringsjäst",
      "Arom",
      "Svartpeppar",
      "Karljohansvamp",
      "Grönsaksextrakt",
      "Gurkmeja",
      "Vitlök",
      "Libbsticka",
    ],
    description: "Nordiska råvaror från hav och land",
    disclaimers: [
      "*Odlad i Sverige",
      "**Kan innehålla spår av fisk och skaldjur",
    ],
    storage:
      "Djupfryst vara, förvaras vid -18°C eller lägre. Bör inte frysas igen efter upptining.",
  },
  {
    amount: "400g",
    id: "fars",
    image: MincedProduct,
    ingredients: [
      "Ärtprotein",
      "Kikärter",
      "Korn*",
      "Morötter*",
      "Palsternacka*",
      "Lök",
      "Sockertång** (Saccharina latissima)",
      "Quinoa*",
      "Havre*",
      "Rapsolja",
      "Salt",
      "Metylcellulosa",
      "Rödbetspulver",
      "Potatis-stärkelse",
      "Jästextrakt",
      "Näringsjäst",
      "Arom",
      "Svartpeppar",
      "Karljohansvamp",
      "Grönsaksextrakt",
      "Gurkmeja",
      "Vitlök",
      "Libbsticka",
    ],
    title: "Formidabel plantbaserad färs",
    description: "Nordiska råvaror från hav och land",
    nutritions: [
      {
        name: "Energi",
        amount: "149 kcal/625 kJ",
      },
      {
        name: "Fett",
        amount: "2,7 g",
      },
      {
        name: "Mättat fett",
        amount: "0,3 g",
      },
      {
        name: "Enkelomättat fett",
        amount: "1,0 g",
      },
      {
        name: "Fleromättat fett",
        amount: "1,1 g",
      },
      {
        name: "Kolhydrat",
        amount: "23,4 g",
      },
      {
        name: "Sockerarter",
        amount: "1,1 g",
      },
      {
        name: "Fiber",
        amount: "5,1 g",
      },
      {
        name: "Protein",
        amount: "10,3 g",
      },
      {
        name: "Salt",
        amount: "1,5 g",
      },
    ],
    disclaimers: [
      "*Odlad i Sverige",
      "**Kan innehålla spår av fisk och skaldjur",
    ],
    storage:
      "Djupfryst vara, förvaras vid -18°C eller lägre. Bör inte frysas igen efter upptining.",
  },
];

const ProductsContainer: React.FC = () => (
  <div className="container">
    <h1>Våra produkter</h1>
    <ProductsCards />
  </div>
);

const Products: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="products">
        <ProductsContainer />
      </div>
      <div className="products-about">
        <div className="container">
          <h1>Vad är Aloba?</h1>
          <p>
            Nordiska råvaror från hav & land. 100% plantbaserat. Välsmakande,
            enkelt att tillaga och god konsistens – självklart. Men vi är också
            besjälade av hälsa. Därför har valt råvaror med omsorg och som har
            goda egenskaper. I den blå regnskogen, i havet utanför Trondheim,
            odlar och skördar vi Saccharina latissima, en alg som ofta kallas
            sockertång. Den är laddad med allt från mineraler och vitaminer till
            omega-3 och jod. Tillsammans med rotfrukter, korn, quinoa, kikärtor
            samt inte minst havre med sina superfibrer, betaglukanerna, har vi
            utvecklat ett nytt plantbaserat matkoncept – Aloba.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
