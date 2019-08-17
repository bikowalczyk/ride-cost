import React from "react";
import styled from "styled-components";

export default function Title(props) {
  const Title = styled.h1`
    color: white;
    font-family: "Lato", sans-serif;
    font-size: 42px;
    padding: 40px;
    float: left;
  `;

  return <Title>{props.text}</Title>;
}
