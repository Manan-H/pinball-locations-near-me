import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Affix } from "antd";
import { fetchNearMeLocations, getUserLocation } from "../../api/pinballApi";
import Button from "../../components/Button";
import Map from "../../components/Map";
import LocationsList from "../../components/LocationsList";
import SearchForm from "../../components/SearchForm";
import DashboardWrapper from "./partials/DashboardWrapper";

const Dashboard = () => {
  const [locations, setLocations] = useState();
  const [userLocation, setUserLocation] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearch = (data) => {
    setUserLocation(data);
  };

  const handleNearMe = async () => {
    let data = await getUserLocation();
    data && setUserLocation({ ...data });
  };
  const getNearLocations = async (lat, long) => {
    let res = await fetchNearMeLocations(lat, long);
    if (res && res.data && res.data.errors) {
      setLocations([]);
      setErrorMsg(res.data.errors);
      return;
    }
    res && res.data && res.data.locations && setLocations(res.data.locations);
    setErrorMsg(null);
  };

  useEffect(() => {
    if (userLocation && userLocation.longitude && userLocation.latitude) {
      getNearLocations(userLocation.latitude, userLocation.longitude);
    }
  }, [userLocation]);

  return (
    <DashboardWrapper>
      <Row gutter={[32, 16]} justify="center">
        <Col xs={24} lg={12}>
          <Row gutter={[32, 16]} justify="center" align="middle">
            <Col xs={24} md={10}>
              <SearchForm handleSearch={handleSearch} />
              <Typography.Title
                level={3}
                style={{ marginBottom: 24, color: "#00000073" }}
              >
                OR
              </Typography.Title>
              <Button type="find" onClick={handleNearMe}>
                Find Near Me
              </Button>
            </Col>
          </Row>
          {errorMsg && (
            <Typography.Title
              level={3}
              style={{ margin: "10px", color: "#e30c17" }}
            >
              {errorMsg}
            </Typography.Title>
          )}
          {locations && <LocationsList locations={locations} />}
        </Col>
        <Col xs={24} lg={12}>
          <Affix offsetTop={10}>
            <Map locations={locations} />
          </Affix>
        </Col>
      </Row>
    </DashboardWrapper>
  );
};

export default Dashboard;
