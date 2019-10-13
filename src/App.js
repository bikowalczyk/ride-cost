import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import uuid from "uuid";

import Navbar from "./components/layout/Navbar";
import Cars from "./components/pages/Cars";
import Routes from "./components/pages/Routes";
import "./App.css";

function App() {
  const [CarsInfo, setCarInfo] = useState(
    JSON.parse(localStorage.getItem("cars") || "[]")
  );

  const editCar = (id, fuelPrice, fuelConsumption, modelName) => {
    const editedCar = CarsInfo.find(car => car.id === id);
    const indexOfEdited = CarsInfo.indexOf(editedCar);

    const updatedCarValues = {
      ...editedCar,
      id,
      model: modelName,
      consumption: fuelConsumption,
      gprice: fuelPrice
    };

    const newCars = [...CarsInfo];
    newCars[indexOfEdited] = updatedCarValues;

    localStorage.setItem("cars", JSON.stringify(newCars));
    setCarInfo(newCars);
  };

  const deleteCar = id => {
    const editedCar = CarsInfo.find(car => car.id === id);
    const indexOfEdited = CarsInfo.indexOf(editedCar);

    const newCars = [...CarsInfo];
    newCars.splice(indexOfEdited, 1);

    localStorage.setItem("cars", JSON.stringify(newCars));
    setCarInfo(newCars);
  };

  const addCar = (fuelPrice, fuelConsumption, modelName) => {
    const updatedCarValues = {
      id: uuid.v1(),
      model: modelName,
      consumption: fuelConsumption,
      gprice: fuelPrice
    };

    const newCars = [...CarsInfo];
    newCars.push(updatedCarValues);

    localStorage.setItem("cars", JSON.stringify(newCars));
    setCarInfo(newCars);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/cars" />} />
          <Route
            exact
            path="/cars"
            render={props => (
              <Cars
                {...props}
                onEditHandler={editCar}
                onDeleteHandler={deleteCar}
                onAddHandler={addCar}
                data={CarsInfo}
                setCarInfo={setCarInfo}
              />
            )}
          />
          <Route exact path="/routes" render={props => <Routes {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
