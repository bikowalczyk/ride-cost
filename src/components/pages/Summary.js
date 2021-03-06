import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGasPump,
  faCoins,
  faRoad,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import Title from "../layout/Title";

/*global google*/

const MapPlaceholder = styled.div`
  width: 100%;
  height: 50vh;
  background-color: gray;
`;

const Row = styled.div`
  display: flex;
  width: 80%;
  max-width: 600px;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto 0;
`;

const Text = styled.h2`
  font-weight: bold;
  font-size: 1.2rem;
  vertical-align: middle;
`;

const Summary = (props) => {
  const {
    CurrentLocation,
    DestinationLocation,
    SelectedCar,
    RouteStops,
  } = props;
  const history = useHistory();

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  const initMap = () => {
    const map = new google.maps.Map(document.getElementById("map"));
    directionsRenderer.setMap(map);
  };

  let waypts = [];

  RouteStops.forEach((e, i) => {
    waypts.push({
      location: RouteStops[i],
    });
  });

  const calcRoute = () => {
    const request = {
      origin: CurrentLocation,
      destination: DestinationLocation,
      // Note that JavaScript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: "DRIVING",
      waypoints: waypts,
    };
    directionsService.route(request, function (response, status) {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
        // console.log(response);
        timeCallback(response);
      }
    });
  };

  // States for results

  const [Duration, setDuration] = useState();
  const [Milage, setMilage] = useState();
  const [Distance, setDistance] = useState();
  const [Price, setPrice] = useState();

  const timeCallback = (response) => {
    const legs = response.routes[0].legs;

    let timeTotal = 0;
    let distanceTotal = 0;

    legs.forEach((e, i) => {
      timeTotal += e.duration.value;
      distanceTotal += e.distance.value;
    });

    function convertMinsToHrsMins(mins) {
      let h = Math.floor(mins / 60);
      let m = mins % 60;
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      return `${h}:${m}`;
    }

    setDuration(convertMinsToHrsMins(Math.floor(timeTotal / 60)));
    setDistance((distanceTotal / 1000).toFixed(2));
    setMilage((distanceTotal / 1000 / SelectedCar.consumption).toFixed(2));
    setPrice(
      (distanceTotal / 1000 / SelectedCar.consumption).toFixed(2) *
        SelectedCar.gprice
    );
  };

  useEffect(() => {
    if (SelectedCar === null) {
      alert("Please select the car you're going to drive");
      history.push("/cars");
    } else if (
      CurrentLocation === undefined ||
      DestinationLocation === undefined
    ) {
      alert("Please choose correct locations");
      history.push("/routes");
    } else {
      initMap();
      calcRoute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CurrentLocation, DestinationLocation]);

  return (
    <Fragment>
      <Title text="Summary"></Title>
      <MapPlaceholder id="map" />
      <Row>
        <FontAwesomeIcon icon={faClock} size={"2x"} />
        <Text>{Duration}h</Text>
        <FontAwesomeIcon icon={faGasPump} size={"2x"} />
        <Text>{Milage} liters</Text>
      </Row>
      <Row>
        <FontAwesomeIcon icon={faRoad} size={"2x"} />
        <Text>{Distance} km</Text>
        <FontAwesomeIcon icon={faCoins} size={"2x"} />
        <Text>{Price} PLN</Text>
      </Row>
    </Fragment>
  );
};

export default Summary;
