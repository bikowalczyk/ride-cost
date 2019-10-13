import React, { Fragment } from "react";
import Waypoint from "../Route/Waypoint";
import Title from "../layout/Title";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Routes() {
  return (
    <Fragment>
      <Title text="Route"></Title>
      <Wrapper>
        <Waypoint></Waypoint>
        <Waypoint></Waypoint>
        <Waypoint></Waypoint>
      </Wrapper>
    </Fragment>
  );
}

export default Routes;
