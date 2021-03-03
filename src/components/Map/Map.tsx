import React, { useEffect } from "react";
import "./Map.scss";

const GOOGLE_API_KEY = "AIzaSyAcq2MSwA2F8se2g97tckeoIDHceERXgM4";

const Map = () => {
  let map: any;
  let service: google.maps.places.PlacesService;

  const request = {
    placeId: "ChIJj2UVkuidX0YRTYMsbQEsCPI",
    fields: ["name", "formatted_address", "place_id", "geometry"],
  };

  const initMap = () => {
    const mapElement = document.getElementById("map");
    console.log(mapElement);

    if (mapElement) {
      map = new google.maps.Map(mapElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
      service = new google.maps.places.PlacesService(map);
      service.getDetails(request, (place, status) => {
        
      })
    }
  };

  const infoWindow = new google.maps.InfoWindow({
    content: `<div>Data</div>`,
  });

  useEffect(() => {
    initMap();
    const marker = new google.maps.Marker({
      position: { lat: -34.397, lng: 150.644 },
      title: "ICA MAXI",
      map,
    });

    marker.addListener("click", () => {
      infoWindow.setContent("marker1");
      infoWindow.open(map, marker);
    });
  });

  return <div style={{ height: "100vh", width: "100%" }} id="map"></div>;
};

export default Map;
