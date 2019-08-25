import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faGasPump,
  faCoins,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

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

const Row = styled.div`
  display: flex;
  margin: 10px 10px 5px 10px;
  padding-left: 15px;
  text-align: center;
  align-items: center;
  p {
    margin-left: 5px;
    font-size: 22px;
  }
`;

const CarEditTile = styled.div`
  width: 300px;
  height: 180px;
  z-index: 3;
  background-color: white;
  opacity: 1;
  position: absolute;
  left 55%;
  top: 35%;
  transform: translate(-55%, -55%);
  color: #1d3557;
  display: flex;
  flex-direction: column;
 
 
 
  h2 {
    margin: 10px;
    font-weight: bold;
    font-size: 32px;
    margin-left: 10px;
  }

`;

const ValueInput = styled.input`
  border: 1px solid #1d3557;
  border-radius: 5px;
  margin: 0px 5px 0px 10px;
  width: 50px;
`;

const ModelInput = styled.input`
  margin: 10px;
  font-weight: bold;
  font-size: 32px;
  margin-left: 10px;
  width: 100%;
  color: #1d3557;
`;

const CarEdit = props => {
  const { car, changeedit, onEditHandler } = props;
  const [fuelPrice, setFuelPrice] = useState(car.gprice);
  const [fuelConsumption, setFuelConsumption] = useState(car.consumption);
  const [modelName, setModelName] = useState(car.model);

  const handleChangeConsumption = e => {
    setFuelConsumption(e.target.value);
  };

  const handleChangePrice = e => {
    setFuelPrice(e.target.value);
  };

  const handleChangeModel = e => {
    setModelName(e.target.value);
  };

  return (
    <Fragment>
      <Wrapper onClick={() => changeedit(false)} />
      <CarEditTile>
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ top: "1px", right: "2px", position: "absolute" }}
          size="2x"
          onClick={() => {
            onEditHandler(car.id, fuelPrice, fuelConsumption, modelName);
            changeedit(false);
          }}
        />
        <ModelInput value={modelName} onChange={handleChangeModel}></ModelInput>
        <Row>
          <FontAwesomeIcon icon={faCoins} size={"2x"} />
          <ValueInput
            id={car.id}
            name="gprice"
            maxLength="4"
            value={fuelPrice}
            placeholder={car.gprice}
            onChange={handleChangePrice}
          />{" "}
          <p>PLN/liter</p>
        </Row>
        <Row>
          <FontAwesomeIcon icon={faGasPump} size={"2x"} />
          <ValueInput
            id={car.id}
            name="consumption"
            maxLength="4"
            value={fuelConsumption}
            placeholder={car.consumption}
            onChange={handleChangeConsumption}
          />{" "}
          <p>liters </p>
        </Row>
        <FontAwesomeIcon
          icon={faTimes}
          style={{ bottom: "0px", right: "6px", position: "absolute" }}
          size="2x"
          onClick={() => changeedit(false)}
        />
      </CarEditTile>
    </Fragment>
  );
};

export default CarEdit;
