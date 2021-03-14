import { LatLngBoundsExpression, LatLngTuple } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { storesData } from "../../pages/Stores/Stores";
import "./Map.scss";

export interface MapProps {}

const Map: React.FC<MapProps> = () => {
  const bounds: LatLngBoundsExpression = [];
  const getMarkers = storesData.map(
    ({ lat, lng, storeName, address, mapsLink }) => {
      const coordinates: LatLngTuple = [lat, lng];
      bounds.push(coordinates);
      return (
        <Marker key={mapsLink} position={[lat, lng]}>
          <Popup>
            <b>{storeName}</b>
            <br />
            {address}
            <br />
            <a target="_blank" rel="noreferrer" href={mapsLink}>
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
