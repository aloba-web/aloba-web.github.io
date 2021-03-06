import React from "react";
import { Link } from "react-router-dom";
import { productsDataMock } from "../../pages/Products/Products";
import Card from "../Card";
import "./ProductsCards.scss";

export interface CardProps {
  img: string;
  alt: string;
  text?: string;
  title?: string;
}

const ProductsCards: React.FC = () => (
  <div className="products-cards">
    {productsDataMock.map((product) => (
      <Link key={product.id} to={`/products/${product.id}`}>
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

export default ProductsCards;
