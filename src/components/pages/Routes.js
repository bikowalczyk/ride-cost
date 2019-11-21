import React, { Fragment, useState, useEffect } from "react";
import Waypoint from "../Route/Waypoint";
import AddressSelector from "../Route/AddressSelector";
import uuid from "uuid";
/*global google*/

import Title from "../layout/Title";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const AddressWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 75px);
  background-color: #1d3557;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Routes = props => {
  const {
    CurrentLocation,
    setCurrentLocation,
    DestinationLocation,
    setDestinationLocation,
    RouteStops,
    setRouteStops,
    updateStops
  } = props;

  const [isInput, setIsInput] = useState(false);
  // State to determine which waypoint element was clicked
  const [WaypointIndicator, setWaypointIndicator] = useState();

  // Function for auto getting user location -> I have to add some button, because of 2many calls
  useEffect(() => {
    if (CurrentLocation === undefined) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          const geocoder = new google.maps.Geocoder();

          geocoder.geocode({ location: geolocation }, function(
            results,
            status
          ) {
            if (status === "OK") {
              setCurrentLocation(results[0].formatted_address);
            } else {
              alert(
                "Geocode was not successful for the following reason: " + status
              );
            }
          });
        });
      }
    }
  });

  return (
    <Fragment>
      <Title text="Route"></Title>
      <Wrapper>
        <Waypoint
          setIsInput={setIsInput}
          title="Current Location"
          text={CurrentLocation}
          type="Current"
          setWaypointIndicator={setWaypointIndicator}
        />
        {/* For every element in routes array render waypoint */}
        {RouteStops.map(stop => {
          return (
            <Waypoint
              key={uuid.v4()}
              setIsInput={setIsInput}
              title="Stop"
              text={stop}
              currentStop={stop}
              RouteStops={RouteStops}
              setRouteStops={setRouteStops}
              updateStops={updateStops}
              type="Route"
              setWaypointIndicator={setWaypointIndicator}
            />
          );
        })}
        <Waypoint
          setIsInput={setIsInput}
          title="Destination"
          text={DestinationLocation}
          type="Destination"
          setWaypointIndicator={setWaypointIndicator}
        />
      </Wrapper>
      {isInput ? (
        <Fragment>
          <AddressWrapper
            onClick={() => {
              setIsInput(false);
            }}
          ></AddressWrapper>
          <AddressSelector
            setCurrentLocation={setCurrentLocation}
            setDestinationLocation={setDestinationLocation}
            setIsInput={setIsInput}
            WaypointIndicator={WaypointIndicator}
            RouteStops={RouteStops}
            setRouteStops={setRouteStops}
          />
        </Fragment>
      ) : null}
      <FontAwesomeIcon
        onClick={() => {
          setIsInput(true);
          setWaypointIndicator("routeAdd");
        }}
        style={{ height: "50px", width: "50px" }}
        icon={faPlus}
      />
    </Fragment>
  );
};

export default Routes;
