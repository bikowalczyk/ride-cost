import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 75px);
  background-color: #1d3557;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const CarEdit = () => {
  return <Wrapper />;
};

export default CarEdit;
