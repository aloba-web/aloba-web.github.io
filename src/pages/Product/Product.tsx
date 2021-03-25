import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import useFetch, { POST_TYPE } from "../../hooks/fetch/useFetch";
import { Product } from "../../hooks/fetch/fetchTypes";
import { createMarkup } from "../../utils/utils";
import "./Product.scss";

interface RouteParams {
  id: string;
}

const getNutritions: React.FC<Product> = (product: Product) => (
  <div className="nutritions-container">
    <div className="nutritions-wrapper">
      <div className="nutritions-name">
        <p style={{ fontWeight: "bold" }}>Näringsvärden</p>
        <p>Energi</p>
        <p>Fett</p>
        <p> varav mättat fett</p>
        <p> varav enkelomättat fett</p>
        <p> varav fleromättat fett</p>
        <p>Kolhydrater</p>
        <p>Sockerarter</p>
        <p>Fiber</p>
        <p>Protein</p>
        <p>Salt</p>
      </div>
      <div className="nutritions-divider"></div>
      <div className="nutritions-amount">
        <p style={{ fontWeight: "bold" }}>per 100 g</p>
        <p>{product.nutritions.energy}</p>
        <p>{product.nutritions?.fat?.fat}</p>
        <p>{product.nutritions?.fat?.ofWhich?.saturatedFat}</p>
        <p>{product.nutritions?.fat?.ofWhich?.monounsaturatedFat}</p>
        <p>{product.nutritions?.fat?.ofWhich?.polyunsaturatedFat}</p>
        <p>{product.nutritions?.carbohydrates}</p>
        <p>{product.nutritions?.sugars}</p>
        <p>{product.nutritions?.fiber}</p>
        <p>{product.nutritions?.protein}</p>
        <p>{product.nutritions?.salt}</p>
      </div>
    </div>
    <p className="disclaimer">{product.nutritions?.rdiDisclaimer}</p>
  </div>
);

const Products: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const { complete, data } = useFetch({
    postType: POST_TYPE.PRODUCTS,
    slug: id,
  });

  if (!complete || !data) return <></>;

  const [product] = data as Array<Product>;

  return (
    <>
      <Navbar />
      <div className="product">
        <img src={product?.image} alt="aloba products" />
        <div className="container">
          <div className="header">
            <h1>{product?.title}</h1>
            <span className="sub-header">{product?.subtitle}</span>
          </div>
          <div className="section-wrapper">
            <div className="section">
              <span className="sub-title">{product.keeping?.title}</span>
              <p
                dangerouslySetInnerHTML={createMarkup(product.keeping?.text)}
              />
            </div>
            <div className="section">
              <span className="sub-title">{product.contains?.title}</span>
              <p
                dangerouslySetInnerHTML={createMarkup(product.contains?.text)}
              />
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
