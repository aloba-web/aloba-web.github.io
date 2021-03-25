import React from "react";
import Footer from "../../components/Footer";
import ProductsCards from "../../components/ProductsCards";
import Navbar from "../../components/Navbar";
import useFetch from "../../hooks/fetch/useFetch";
import { ProductsPage } from "../../hooks/fetch/fetchTypes";
import PAGE from "../pageNames";
import { createMarkup } from "../../utils/utils";
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

  if (!complete || !data) return <></>;

  const productsPageData = data as ProductsPage;

  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
};

export default Products;
