/* global google */
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const apiIsLoaded = (map, maps, center) => {
  const circle = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.3,
    map,
    center: center,
    radius: 1000
  });
};

const googleAPIKey = "AIzaSyB3ocaslSkJF_-Ck3U6RhdGTcnBSoikZUM";

const MapExample = ({ center, zoom }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: googleAPIKey }}
      yesIWantToUseGoogleMapApiInternals={true}
      defaultZoom={zoom}
      defaultCenter={center}
      onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, center)}
    />
  );
};

export default MapExample;
