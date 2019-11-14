import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
  width: 80%;
  color: #1d3557;
`;

const CarAdd = props => {
  const { changeedit, onAddHandler } = props;
  const [fuelPrice, setFuelPrice] = useState();
  const [fuelConsumption, setFuelConsumption] = useState();
  const [modelName, setModelName] = useState();

  const handleChangeConsumption = e => {
    setFuelConsumption(e.target.value);
  };

  const handleChangePrice = e => {
    setFuelPrice(e.target.value);
  };

  const handleChangeModel = e => {
    setModelName(e.target.value);
  };

  const handleClick = () => {
    if (isNaN(fuelConsumption) || isNaN(fuelPrice) || modelName == null) {
      alert("Please provide correct values for fields below");
    } else {
      onAddHandler(fuelPrice, fuelConsumption, modelName);
      changeedit(false);
    }
  };

  return (
    <Fragment>
      <Wrapper onClick={() => changeedit(false)} />
      <CarEditTile
        onKeyPress={e => {
          if (e.key === "Enter") {
            handleClick();
          }
        }}
      >
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{ top: "1px", right: "2px", position: "absolute" }}
          size="2x"
          onClick={() => {
            handleClick();
          }}
        />
        <ModelInput
          placeholder="Model name"
          maxLength="40"
          onChange={handleChangeModel}
        ></ModelInput>
        <Row>
          <FontAwesomeIcon icon={faCoins} size={"2x"} />
          <ValueInput
            placeholder="0.00"
            name="gprice"
            max="99"
            type="number"
            onChange={handleChangePrice}
          />{" "}
          <p>PLN/liter</p>
        </Row>
        <Row>
          <FontAwesomeIcon icon={faGasPump} size={"2x"} />
          <ValueInput
            placeholder="0.00"
            name="consumption"
            type="number"
            max="99"
            onChange={handleChangeConsumption}
          />{" "}
          <p>liters/100km</p>
        </Row>
      </CarEditTile>
    </Fragment>
  );
};

export default CarAdd;
