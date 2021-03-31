import React from "react";
import ProductsCards from "../../components/ProductsCards";
import useFetch from "../../hooks/fetch/useFetch";
import { ProductsPage } from "../../hooks/fetch/fetchTypes";
import PAGE from "../pageNames";
import { createMarkup } from "../../utils/utils";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import "./Products.scss";
import PageWrapper from "../PageWrapper";

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

const ProductsContainer: React.FC<ProductsPage> = ({ title, ingress }) => (
  <div className="container">
    <div className="header">
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={createMarkup(ingress || "")} />
    </div>
    <ProductsCards />
  </div>
);

const Products: React.FC = () => {
  const { complete, data } = useFetch({ page: PAGE.PRODUCTS });

  if (!complete || !data) return <Spinner />;

  const productsPageData = data as ProductsPage;

  return (
    <PageWrapper>
      <div className="products">
        <ProductsContainer {...productsPageData} />
      </div>
      <div className="products-about">
        <div className="container">
          <h1>{productsPageData.whatIsAloba?.title}</h1>
          <p
            dangerouslySetInnerHTML={createMarkup(
              productsPageData.whatIsAloba?.text || ""
            )}
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Products;
