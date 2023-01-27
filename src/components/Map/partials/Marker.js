import React from "react";
import styled from "styled-components";
import { MarkerF } from "@react-google-maps/api";

const Marker = ({ index, marker }) => {
  const MarkerWrapper = styled("div")`
    background: blue;
  `;
  return (
    <MarkerWrapper>
      <MarkerF
        key={index}
        position={marker.position}
        label={marker.label}
        onClick={(event) => markerClicked(marker, index)}
      >
        {activeInfoWindow === index && (
          <InfoWindow position={marker.position}>
            <span>Hello</span>
          </InfoWindow>
        )}
      </MarkerF>
    </MarkerWrapper>
  );
};

export default Marker;
