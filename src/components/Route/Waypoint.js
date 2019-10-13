import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Selector = styled.div`
  width: 100%;
  height: 15vh;
  display: block;
  background-color: white;
  margin: 4% auto;
  color: #1d3557;
`;

function Waypoint() {
  return (
    <Selector>
      <FontAwesomeIcon
        icon={faTimes}
        size="2x"
        style={{ float: "right", marginRight: "5px" }}
      ></FontAwesomeIcon>
    </Selector>
  );
}

export default Waypoint;
