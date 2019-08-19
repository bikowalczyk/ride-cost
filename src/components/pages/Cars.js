import React, { Fragment, useState } from "react";
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
  const { data, editData } = props;

  // state for knowing when to display edit component!
  const [isEdit, setisEdit] = useState(true);

  return (
    <Fragment>
      <Title text="Your Cars" />
      <Wrapper>
        {/* Don't pass whole data to props. Render only dynamiclly and with selected props */}
        {data.map(car => (
          <CarTile key={car.id} car={car} editData={editData} isEdit={isEdit} />
        ))}
        <CarTile data={props} type="add" />
      </Wrapper>
    </Fragment>
  );
};

export default Cars;
