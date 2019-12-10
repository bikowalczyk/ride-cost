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
  align-itself: center;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/cars">
        <FontAwesomeIcon
          style={{ padding: "10px 20px" }}
          icon={faCar}
          size={"3x"}
        />
      </Link>
      <Link to="/routes">
        <FontAwesomeIcon
          style={{ padding: "10px 20px" }}
          icon={faRoad}
          size={"3x"}
        />
      </Link>
      <Link to="/summary">
        <FontAwesomeIcon
          style={{ padding: "10px 20px" }}
          icon={faMapMarkedAlt}
          size={"3x"}
        />
      </Link>
    </Wrapper>
  );
};

export default Navbar;
