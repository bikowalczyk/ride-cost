import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 42px;
  padding: 10vw 13vw 5vw;
  text-align: left;
`;

const Title = props => {
  return <StyledTitle>{props.text}</StyledTitle>;
};

export default Title;
