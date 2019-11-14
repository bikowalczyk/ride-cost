import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faRoad,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  color: #1d3557;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/ridecost/cars">
        <FontAwesomeIcon icon={faCar} size={"3x"} />
      </Link>
      <Link to="/ridecost/routes">
        <FontAwesomeIcon icon={faRoad} size={"3x"} />
      </Link>
      <Link to="/ridecost/summary">
        <FontAwesomeIcon icon={faMapMarkedAlt} size={"3x"} />
      </Link>
    </Wrapper>
  );
};

export default Navbar;
