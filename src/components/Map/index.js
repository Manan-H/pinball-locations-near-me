import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";
import { GOOGLE_MAPS_KEY } from "../../configs/env-vars";
import { Typography } from "antd";

const Map = ({ locations }) => {
  const [activeInfoWindow, setActiveInfoWindow] = useState("");
  const [markers, setMarkers] = useState(locations ? [...locations] : []);

  useEffect(() => {
    setMarkers(locations ? [...locations] : []);
  }, [locations]);

  const containerStyle = {
    width: "100%",
    minHeight: "100vh",
  };

  const center = {
    lat: 47.116386,
    lng: -101.299591,
  };

  const markerClicked = (marker, id) => {
    setActiveInfoWindow(id);
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={
          markers && markers.length
            ? {
                lat: +markers[0].lat,
                lng: +markers[0].lon,
              }
            : center
        }
        zoom={markers && markers.length ? 9 : 3}
      >
        {markers &&
          markers.map((marker, index) => {
            return (
              <MarkerF
                key={index}
                position={{
                  lat: +marker.lat,
                  lng: +marker.lon,
                }}
                label={{
                  color: "white",
                  text: marker.num_machines
                    ? marker.num_machines.toString()
                    : "",
                }}
                onClick={(event) => markerClicked(marker, marker.id)}
              >
                {activeInfoWindow === marker.id && (
                  <InfoWindow
                    position={
                      marker.lat &&
                      marker.lon && {
                        lat: +marker.lat,
                        lng: +marker.lon,
                      }
                    }
                  >
                    <>
                      <Typography.Title
                        level={2}
                        style={{ margin: "10px", color: "#e30c17" }}
                      >
                        {marker.name}
                      </Typography.Title>
                      <Typography.Title level={3} style={{ margin: "10px" }}>
                        {marker.street}
                      </Typography.Title>
                    </>
                  </InfoWindow>
                )}
              </MarkerF>
            );
          })}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
