import React, { Fragment, useEffect, useState } from "react";
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
  font-size: 4.5vw;
  vertical-align: middle;
`;

const Summary = props => {
  const { CurrentLocation, DestinationLocation } = props;
  const history = useHistory();

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  const initMap = () => {
    const map = new google.maps.Map(document.getElementById("map"));
    directionsRenderer.setMap(map);
  };

  const calcRoute = () => {
    const request = {
      origin: CurrentLocation,
      destination: DestinationLocation,
      // Note that JavaScript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: "DRIVING"
    };
    directionsService.route(request, function(response, status) {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
      }
    });
  };

  const calcTime = () => {
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [CurrentLocation],
        destinations: [DestinationLocation],
        travelMode: "DRIVING"
      },
      timeCallback
    );
  };

  // States for results

  const [Duration, setDuration] = useState();
  const [Milage, setMilage] = useState();
  const [Distance, setDistance] = useState();
  const [Price, setPrice] = useState();

  const timeCallback = response => {
    console.log(response);
    const rows = response.rows[0].elements[0];
    console.log(rows.duration.text);
    setDuration(rows.duration.text);
    setDistance(rows.distance.text);
  };

  useEffect(() => {
    if (CurrentLocation === undefined || DestinationLocation === undefined) {
      alert("Please choose correct locations");
      history.push("/routes");
    } else {
      initMap();
      calcRoute();
      calcTime();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CurrentLocation, DestinationLocation]);

  return (
    <Fragment>
      <Title text="Summary"></Title>
      <MapPlaceholder id="map" />
      <Row>
        <FontAwesomeIcon icon={faClock} size={"2x"} />
        <Text>{Duration}</Text>
        <FontAwesomeIcon icon={faGasPump} size={"2x"} />
        <Text>{Milage} liters</Text>
      </Row>
      <Row>
        <FontAwesomeIcon icon={faRoad} size={"2x"} />
        <Text>{Distance}</Text>
        <FontAwesomeIcon icon={faCoins} size={"2x"} />
        <Text>{Price} PLN</Text>
      </Row>
    </Fragment>
  );
};

export default Summary;
