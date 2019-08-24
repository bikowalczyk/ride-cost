import React, { Fragment, useState } from "react";
import styled from "styled-components";
import CarEdit from "./CarEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faGasPump,
  faCoins,
  faEdit
} from "@fortawesome/free-solid-svg-icons";

const AddTitle = styled.div`
  width: 150px;
  height: 105px;
  background-color: white;
  color: #1d3557;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
`;

const Tile = styled(AddTitle)`
  flex-direction: column;
  text-align: left;
  align-items: start;
  position: relative;
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

const EditIcon = styled.div`
  position: absolute;
  bottom: 4px;
  right: 3px;
`;

const CarTile = props => {
  const { type, car, setCarInfo, carsData, carIndex } = props;
  const [isEdit, setIsEdit] = useState(false);

  // Where should I add a function and a compontent to edit state? Here lol

  return type ? (
    <AddTitle>
      <FontAwesomeIcon icon={faPlus} size={"4x"} />
    </AddTitle>
  ) : (
    <Fragment>
      {isEdit ? (
        <CarEdit
          changeedit={setIsEdit}
          setCarInfo={setCarInfo}
          car={car}
          carsData={carsData}
          carIndex={carIndex}
        />
      ) : null}

      <Tile>
        <h2>{car.model}</h2>
        <Row>
          <FontAwesomeIcon icon={faCoins} />
          <p>{car.gprice} PLN/liter</p>
        </Row>
        <Row>
          <FontAwesomeIcon icon={faGasPump} />
          <p>{car.consumption} liters/100km</p>
        </Row>
        <EditIcon onClick={() => setIsEdit(true)}>
          <FontAwesomeIcon icon={faEdit} />
        </EditIcon>
      </Tile>
    </Fragment>
  );
};

export default CarTile;
