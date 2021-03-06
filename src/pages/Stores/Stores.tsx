import React from "react";
import Map from "../../components/Map";
import { Store, StoresPage } from "../../hooks/fetch/fetchTypes";
import useFetch, { POST_TYPE } from "../../hooks/fetch/useFetch";
import PAGE from "../pageNames";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";
import "./Stores.scss";
import PageWrapper from "../PageWrapper";
import { createMarkup } from "../../utils/utils";

const getStores = (stores: Array<Store>) => (
  <div className="store-list">
    {stores.map((store) => (
      <a target="_blank" rel="noreferrer" key={store.url} href={store.url}>
        <span dangerouslySetInnerHTML={createMarkup(store.storeName)} />
        <span dangerouslySetInnerHTML={createMarkup(store.address)} />
      </a>
    ))}
  </div>
);

const Stores: React.FC = () => {
  const { complete: storesComplete, data: fetchedStoresData } = useFetch({
    postType: POST_TYPE.STORES,
  });
  const { complete, data } = useFetch({ page: PAGE.STORES });

  if (!complete || !data || !storesComplete || !fetchedStoresData)
    return <Spinner />;

  const storesData = fetchedStoresData as Array<Store>;
  const storesPage = data as StoresPage;

  return (
    <PageWrapper>
      <div className="stores">
        <div className="header">
          <span dangerouslySetInnerHTML={createMarkup(storesPage.title)} />
          <span dangerouslySetInnerHTML={createMarkup(storesPage.ingress)} />
        </div>
        <div className="content-wrapper">
          <div className="map-wrapper">
            <Map stores={storesData} />
          </div>
          {getStores(storesData)}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Stores;
