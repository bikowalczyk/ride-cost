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
import "./App.css";

function App() {
  const [CarsInfo, setCarInfo] = useState([
    {
      id: uuid.v1(),
      model: "Toyota Corolla",
      consumption: 8,
      gprice: 5.32,
      selected: false
    },
    {
      id: uuid.v1(),
      model: "Mazda 3",
      consumption: 8.8,
      gprice: 5.32,
      selected: false
    }
  ]);

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
                data={CarsInfo}
                setCarInfo={setCarInfo}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
