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

const SubTitle = styled.h2`
  font-weight: bold;
  margin: 10px 0 10px 35%;
  text-align: left;
  width: 50%;
`;

const SubText = styled(SubTitle)`
  font-weight: 200;
  margin-left: 35%;
  font-size: 90%;
  width: 42%;
`;

const Waypoint = props => {
  const { title, type, text } = props;
  return (
    <Selector
      onClick={() => {
        props.setIsInput(true);
      }}
    >
      {type === "route" ? (
        <FontAwesomeIcon
          icon={faTimes}
          style={{
            float: "right",
            marginRight: "5px",
            height: "25px",
            width: "25px"
          }}
        />
      ) : null}

      <div style={{ marginLeft: "10%" }}>
        <SubTitle>{title}</SubTitle>
        <SubText>{text ? text : "Click to choose a location"}</SubText>
      </div>
    </Selector>
  );
};

export default Waypoint;
