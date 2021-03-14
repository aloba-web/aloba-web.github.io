import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./Product.scss";
import { useParams } from "react-router-dom";
import { Product, productsDataMock } from "../Products/Products";

interface RouteParams {
  id: string;
}

const getNutritions: React.FC<Product> = (product: Product) => (
  <div className="nutritions-container">
    <div className="nutritions-wrapper">
      <div className="nutritions-name">
        <p style={{ fontWeight: "bold" }}>Näringsvärden</p>
        {product.nutritions.map((nutrition, index) => (
          <p key={index}>{nutrition.name}</p>
        ))}
      </div>
      <div className="nutritions-divider"></div>
      <div className="nutritions-amount">
        <p style={{ fontWeight: "bold" }}>per 100 g</p>
        {product.nutritions.map((nutrition, index) => (
          <p key={index}>{nutrition.amount}</p>
        ))}
      </div>
    </div>
    <p className="disclaimer">100 g Aloba ger 147% av rekommenderat dagligt intag (RDI) av jod.</p>
  </div>
);

const Products: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const product = productsDataMock.find((product) => product.id === id);
  const createMarkup = (markup: string) => {
    return { __html: markup };
  };

  return (
    <>
      <Navbar />
      <div className="product">
        <img src={product?.image} alt="aloba products" />
        <div className="container">
          <div className="header">
            <h1>{product?.title}</h1>
            <span className="sub-header">{product?.amount}</span>
          </div>
          <div className="section-wrapper">
            <div className="section">
              <span className="sub-title">Förvaring</span>
              <p>{product?.storage}</p>
            </div>
            <div className="section">
              <span className="sub-title">Innehåll</span>
              <p>
                {product?.ingredients.map((ingredient, index) => (
                  <span key={ingredient}
                    dangerouslySetInnerHTML={createMarkup(
                      `${ingredient}${
                        index < product.ingredients.length - 1 ? ", " : ""
                      }`
                    )}
                  ></span>
                ))}
              </p>
            </div>
            <div className="section">
              {product?.disclaimers.map((disclaimer, index) => (
                <p key={index}>{disclaimer}</p>
              ))}
            </div>
          </div>
        </div>
        {product && getNutritions(product)}
      </div>
      <Footer />
    </>
  );
};

export default Products;
