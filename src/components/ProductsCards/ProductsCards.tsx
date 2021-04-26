import React from "react";
import { Link } from "react-router-dom";
import useFetch, { POST_TYPE } from "../../hooks/fetch/useFetch";
import { Product } from "../../hooks/fetch/fetchTypes";
import Card from "../Card";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import "./ProductsCards.scss";
import useWindowSize from "../../hooks/useWindowSize";
import { getImageBySize } from "../../utils/utils";

const ProductsCards: React.FC = () => {
  const { complete, data } = useFetch({ postType: POST_TYPE.PRODUCTS });
  const windowSizes = useWindowSize();

  if (!complete || !data) {
    return <Spinner />;
  }

  return (
    <div className="products-cards">
      {data.map((product: Product) => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <Card
            img={getImageBySize(product.image, windowSizes)}
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
