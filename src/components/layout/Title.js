import React from "react";
import styled from "styled-components";

const Title = props => {
  const Title = styled.h1`
    font-family: "Lato", sans-serif;
    font-size: 42px;
    padding: 40px;
    text-align: left;
  `;

  return <Title>{props.text}</Title>;
};

export default Title;
