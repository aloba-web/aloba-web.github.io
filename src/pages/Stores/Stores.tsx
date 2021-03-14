import React from "react";
import Footer from "../../components/Footer";
import Map from "../../components/Map";
import Navbar from "../../components/Navbar";
import "./Stores.scss";

interface StoresData {
  mapsLink: string;
  lat: number;
  lng: number;
  storeName: string;
  address: string;
}

export const storesData: Array<StoresData> = [
  {
    storeName: "ICA Kvantum Kungsholmen",
    address: "Fleminggatan 16, 112 26 Stockholm",
    lat: 59.3331617,
    lng: 18.0448706,
    mapsLink:
      "https://www.google.com/maps/place/ICA+Kvantum+Kungsholmen/@59.3331617,18.0448706,15z/data=!4m5!3m4!1s0x0:0x6fad65e5b477d748!8m2!3d59.3331617!4d18.0448706",
  },
  {
    storeName: "ICA Kvantum Lidingö",
    address: "Agavägen 3, 181 39 Lidingö",
    lat: 59.3496147,
    lng: 18.1461782,
    mapsLink:
      "https://www.google.com/maps/place/ICA+Kvantum+Liding%C3%B6/@59.3496147,18.1461782,15z/data=!4m5!3m4!1s0x0:0x540d5b0afab1200!8m2!3d59.3496147!4d18.1461782",
  },
  {
    storeName: "ICA Kvantum Mall of Scandinavia",
    address: "Evenemangsgatan 6, 169 79 Solna",
    lat: 59.3697361,
    lng: 18.0033061,
    mapsLink: "https://goo.gl/maps/hzXrfXZ3CVWFPHmcA",
  },
  {
    storeName: "ICA Kvantum Södermalm",
    lat: 59.3123708,
    lng: 18.0637958,
    address: "Magnus Ladulåsgatan 40, 118 27 Stockholm",
    mapsLink: "https://goo.gl/maps/jBhM35z1fmPVxBpV7",
  },
  {
    storeName: "ICA Supermarket Hagsätra",
    address: "Hagsätra torg 28, 124 73 Bandhagen",
    lat: 59.262462,
    lng: 18.014282,
    mapsLink:
      "https://www.google.com/maps/place/ICA+Supermarket+Hags%C3%A4tra/@59.262462,18.014282,15z/data=!4m5!3m4!1s0x0:0x637bec196ee65fcc!8m2!3d59.262462!4d18.014282",
  },
];

const getStores = (stores: Array<StoresData>) => (
  <div className="store-list">
    {stores.map((store) => (
      <a
        target="_blank"
        rel="noreferrer"
        key={store.mapsLink}
        href={store.mapsLink}
      >
        <div className="store-item">
          <span className="store-name">{store.storeName}</span>
          <span>{store.address}</span>
        </div>
      </a>
    ))}
  </div>
);

const Stores: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="stores">
        <div className="header">
          <h1 className="title">Butiker</h1>
          <span className="sub-header">Du hittar oss här</span>
        </div>
        <div className="content-wrapper">
          <div className="map-wrapper">
            <Map />
          </div>
          {getStores(storesData)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Stores;
