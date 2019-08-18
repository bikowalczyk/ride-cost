import React, { Fragment } from "react";
import Title from "../layout/Title";
import CarTile from "../Cars/CarTile";
import styled from "styled-components";

const Cars = props => {
  const Wrapper = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  `;

  return (
    <Fragment>
      <Title text="Your Cars" />
      <Wrapper>
        {/* Don't pass whole data to props. Render only dynamiclly and with selected props */}
        <CarTile data={props} />
        <CarTile data={props} type="add" />
      </Wrapper>
    </Fragment>
  );
};

export default Cars;
