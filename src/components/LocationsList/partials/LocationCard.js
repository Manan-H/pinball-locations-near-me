import React from "react";
import styled from "styled-components";
import { Card as card } from "antd";

const LocationCard = ({ location }) => {
  const Card = styled(card)`
    border-radius: 12px;
    margin-bottom: 8px;
    box-shadow: 5px 13px 26px -9px rgba(0, 0, 0, 0.75);
    .ant-card-head {
      background: #e30c17;
      color: white;
    }
  `;
  return (
    location && (
      <Card
        title={location.name}
        extra={<span>{location.distance.toFixed(2)} miles</span>}
      >
        {location.machine_names &&
          location.machine_names.map((name, index) => (
            <p key={index}>{name}</p>
          ))}
      </Card>
    )
  );
};

export default LocationCard;
