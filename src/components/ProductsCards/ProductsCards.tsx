import React from "react";
import { Link } from "react-router-dom";
import useFetch, { POST_TYPE } from "../../hooks/fetch/useFetch";
import { Product } from "../../hooks/fetch/fetchTypes";
import Card from "../Card";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import "./ProductsCards.scss";

const ProductsCards: React.FC = () => {
  const { complete, data } = useFetch({ postType: POST_TYPE.PRODUCTS });

  if (!complete || !data) {
    return <Spinner />;
  }

  return (
    <div className="products-cards">
      {data.map((product: Product) => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <Card
            img={product.image}
            title={product.title}
            text={product.ingress}
            alt={"product-image"}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProductsCards;
