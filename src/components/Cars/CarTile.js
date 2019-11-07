import React, { Fragment, useState } from "react";
import styled from "styled-components";
import CarEdit from "./CarEdit";
import CarAdd from "./CarAdd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faGasPump,
  faCoins,
  faEdit,
  faCheckSquare
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
  const {
    type,
    car,
    setCarInfo,
    carsData,
    onEditHandler,
    onAddHandler,
    onDeleteHandler
  } = props;
  const [isEdit, setIsEdit] = useState(false);

  // Where should I add a function and a compontent to edit state? Here lol

  return type ? (
    <Fragment>
      <AddTitle onClick={() => setIsEdit(true)}>
        <FontAwesomeIcon icon={faPlus} size={"4x"} />
      </AddTitle>
      {isEdit ? (
        // I have to create a new CarAdd component, which will be mostly copied from CarEdit. This is the best way imo.
        <CarAdd
          changeedit={setIsEdit}
          setCarInfo={setCarInfo}
          onAddHandler={onAddHandler}
        />
      ) : null}
    </Fragment>
  ) : (
    <Fragment>
      {isEdit ? (
        <CarEdit
          changeedit={setIsEdit}
          setCarInfo={setCarInfo}
          car={car}
          carsData={carsData}
          onEditHandler={onEditHandler}
          onDeleteHandler={onDeleteHandler}
        />
      ) : null}

      <Tile onClick={() => {}}>
        <FontAwesomeIcon
          icon={faCheckSquare}
          size={"2x"}
          style={{
            position: "absolute",
            top: "-3px",
            right: "-1px",
            color: "green"
          }}
        />
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
