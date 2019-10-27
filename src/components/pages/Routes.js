import React, { Fragment, useState } from "react";
import Waypoint from "../Route/Waypoint";
import AddressSelector from "../Route/AddressSelector";

import Title from "../layout/Title";

import styled from "styled-components";

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
    RouteStops,
    setRouteStops
  } = props;

  const [isInput, setIsInput] = useState(false);

  return (
    <Fragment>
      <Title text="Route"></Title>
      <Wrapper>
        <Waypoint setIsInput={setIsInput} />
        <Waypoint />
        <Waypoint />
      </Wrapper>
      {isInput ? (
        <AddressWrapper>
          <AddressSelector />
        </AddressWrapper>
      ) : null}
    </Fragment>
  );
};

export default Routes;
