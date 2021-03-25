import { LatLngBoundsExpression, LatLngTuple } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Store } from "../../hooks/fetch/fetchTypes";
import "./Map.scss";

export interface MapProps {
  stores: Array<Store>;
}

const Map: React.FC<MapProps> = ({stores}) => {
  const bounds: LatLngBoundsExpression = [];
  const getMarkers = stores.map(
    ({ coordinates: { lat, lng }, storeName, address, url }) => {
      const coordinates: LatLngTuple = [lat, lng];
      bounds.push(coordinates);
      return (
        <Marker key={url} position={[lat, lng]}>
          <Popup>
            <b>{storeName}</b>
            <br />
            {address}
            <br />
            <a target="_blank" rel="noreferrer" href={url}>
              Hitta hit
            </a>
          </Popup>
        </Marker>
      );
    }
  );

  return (
    <MapContainer
      attributionControl={false}
      bounds={bounds}
      boundsOptions={{ padding: [10, 10] }}
      zoom={5}
      scrollWheelZoom={false}
      style={{ height: 400, width: "100%" }}
    >
      <TileLayer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png" />
      {getMarkers}
    </MapContainer>
  );
};

export default Map;
