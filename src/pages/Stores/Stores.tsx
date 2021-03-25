import React from "react";
import Footer from "../../components/Footer";
import Map from "../../components/Map";
import Navbar from "../../components/Navbar";
import { Store, StoresPage } from "../../hooks/fetch/fetchTypes";
import useFetch, { POST_TYPE } from "../../hooks/fetch/useFetch";
import PAGE from "../pageNames";
import "./Stores.scss";

const getStores = (stores: Array<Store>) => (
  <div className="store-list">
    {stores.map((store) => (
      <a target="_blank" rel="noreferrer" key={store.url} href={store.url}>
        <div className="store-item">
          <span className="store-name">{store.storeName}</span>
          <span>{store.address}</span>
        </div>
      </a>
    ))}
  </div>
);

const Stores: React.FC = () => {
  const { complete: storesComplete, data: fetchedStoresData } = useFetch({
    postType: POST_TYPE.STORES,
  });
  const { complete, data } = useFetch({ page: PAGE.STORES });

  if (!complete || !data || !storesComplete || !fetchedStoresData) return <></>;

  const storesData = fetchedStoresData as Array<Store>;
  const storesPage = data as StoresPage;

  return (
    <>
      <Navbar />
      <div className="stores">
        <div className="header">
          <h1 className="title">{storesPage.title}</h1>
          <span className="sub-header">{storesPage.ingress}</span>
        </div>
        <div className="content-wrapper">
          <div className="map-wrapper">
            <Map stores={storesData} />
          </div>
          {getStores(storesData)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Stores;
