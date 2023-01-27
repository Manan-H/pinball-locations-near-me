import React from "react";
import LocationCard from "./partials/LocationCard";

const LocationsList = ({ locations }) => {
  return (
    <>
      {locations &&
        locations.map((location, index) => (
          <LocationCard key={index} location={location} />
        ))}
    </>
  );
};

export default LocationsList;
