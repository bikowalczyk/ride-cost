import React, { Fragment } from "react";
import Title from "../layout/Title";
import CarTile from "../Cars/CarTile";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Cars = props => {
  const { data, setCarInfo, onEditHandler, onAddHandler } = props;

  return (
    <Fragment>
      <Title text="Your Cars" />
      <Wrapper>
        {/* Don't pass whole data to props. Render only dynamiclly and with selected props */}
        {data.map(car => (
          <CarTile
            key={car.id}
            car={car}
            carsData={data}
            setCarInfo={setCarInfo}
            onEditHandler={onEditHandler}
            onAddHandler={onAddHandler}
          />
        ))}
        <CarTile data={data} type="add" onAddHandler={onAddHandler} />
      </Wrapper>
    </Fragment>
  );
};

export default Cars;
