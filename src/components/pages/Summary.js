import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGasPump,
  faCoins,
  faRoad,
  faClock
} from "@fortawesome/free-solid-svg-icons";

import Title from "../layout/Title";

/*global google*/

const MapPlaceholder = styled.div`
  width: 100%;
  height: 55vh;
  background-color: gray;
`;

const Row = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto 0;
`;

const Text = styled.h2`
  font-weight: bold;
  font-size: 1.3rem;
  vertical-align: middle;
`;

const Summary = props => {
  const { CurrentLocation, DestinationLocation } = props;
  const history = useHistory();

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"));
    directionsRenderer.setMap(map);
  }

  function calcRoute() {
    const request = {
      origin: CurrentLocation,
      destination: DestinationLocation,
      // Note that JavaScript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: "DRIVING"
    };
    directionsService.route(request, function(response, status) {
      if (status == "OK") {
        directionsRenderer.setDirections(response);
      }
    });
  }

  useEffect(() => {
    if (CurrentLocation === undefined || DestinationLocation === undefined) {
      alert("Please choose correct locations");
      history.push("/routes");
    } else {
      initMap();
      calcRoute();
    }
  });

  return (
    <Fragment>
      <Title text="Summary"></Title>
      <MapPlaceholder id="map" />
      <Row>
        <FontAwesomeIcon icon={faClock} size={"2x"} />
        <Text>1:23h</Text>
        <FontAwesomeIcon icon={faGasPump} size={"2x"} />
        <Text>35 liters</Text>
      </Row>
      <Row>
        <FontAwesomeIcon icon={faRoad} size={"2x"} />
        <Text>480 km</Text>
        <FontAwesomeIcon icon={faCoins} size={"2x"} />
        <Text>213.42 PLN</Text>
      </Row>
    </Fragment>
  );
};

export default Summary;
