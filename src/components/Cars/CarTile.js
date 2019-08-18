import React, { Fragment } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faGasPump, faCoins } from "@fortawesome/free-solid-svg-icons";

const CarTile = props => {
  const { type } = props;

  const EditTile = styled.div`
    width: 150px;
    height: 105px;
    background-color: white;
    color: #1d3557;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Tile = styled(EditTile)`
    flex-direction: column;
    text-align: left;
    align-items: start;
    h2 {
      margin-bottom: 10px;
      font-weight: bold;
      font-size: 18px;
      margin-left: 10px;
    }
  `;

  const Row = styled.div`
    display: flex;
    margin-left: 10px;
    p {
      margin-left: 5px;
      margin-bottom: 10px;
    }
  `;

  return type ? (
    <EditTile>
      <FontAwesomeIcon icon={faPlus} size={"4x"} />
    </EditTile>
  ) : (
    <Tile>
      <h2>Toyota Corolla</h2>
      <Row>
        <FontAwesomeIcon icon={faCoins} />
        <p>5.32PLN/liter</p>
      </Row>
      <Row>
        <FontAwesomeIcon icon={faGasPump} />
        <p>8.1 liters</p>
      </Row>
    </Tile>
  );
};

export default CarTile;
