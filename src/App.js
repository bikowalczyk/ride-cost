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
import Summary from "./components/pages/Summary";
import "./App.css";

function App() {
  // Instead of making another state for choosen car I will filtr the current LS
  const [CarsInfo, setCarInfo] = useState(
    JSON.parse(localStorage.getItem("cars") || "[]")
  );
  const [SelectedCar, setSelectedCar] = useState(
    JSON.parse(localStorage.getItem("SelectedCar") || null)
  );

  const editCar = (id, fuelPrice, fuelConsumption, modelName, selected) => {
    const editedCar = CarsInfo.find(car => car.id === id);
    const indexOfEdited = CarsInfo.indexOf(editedCar);

    const updatedCarValues = {
      ...editedCar,
      id,
      model: modelName,
      consumption: Number(
        fuelConsumption.toString().replace(/(\d),(?=\d)/g, "$1.")
      ),
      gprice: Number(fuelPrice.toString().replace(/(\d),(?=\d)/g, "$1.")),
      selected: selected
    };

    const newCars = [...CarsInfo];

    newCars.forEach(currValue => {
      if (editedCar === currValue) {
        localStorage.setItem("SelectedCar", JSON.stringify(editedCar));
        setSelectedCar(editedCar);
      } else {
        currValue.selected = false;
      }
    });
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
      consumption: Number(
        fuelConsumption.toString().replace(/(\d),(?=\d)/g, "$1.")
      ),
      gprice: Number(fuelPrice.toString().replace(/(\d),(?=\d)/g, "$1.")),
      selected: true
    };

    const newCars = [...CarsInfo];

    newCars.push(updatedCarValues);
    newCars.forEach(currValue => {
      if (updatedCarValues === currValue) {
        localStorage.setItem("SelectedCar", JSON.stringify(updatedCarValues));
        setSelectedCar(updatedCarValues);
      } else {
        currValue.selected = false;
      }
    });

    localStorage.setItem("cars", JSON.stringify(newCars));
    setCarInfo(newCars);
  };

  // Route info -> stops with adress info inside
  // Current location should be added dynamicly, stops should be only in state - not in LS
  // It should be stored as lat/long -> no bc it causes 2many API calls
  // 2 states because Stops will have an option to be removed and will be rendered dynamically
  const [CurrentLocation, setCurrentLocation] = useState();
  const [DestinationLocation, setDestinationLocation] = useState();
  const [RouteStops, setRouteStops] = useState();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/ridecost"
            render={() => <Redirect to="/ridecost/cars" />}
          />
          <Route
            exact
            path="/ridecost/cars"
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
          <Route
            exact
            path="/ridecost/routes"
            render={props => (
              <Routes
                {...props}
                CurrentLocation={CurrentLocation}
                setCurrentLocation={setCurrentLocation}
                DestinationLocation={DestinationLocation}
                setDestinationLocation={setDestinationLocation}
                RouteStops={RouteStops}
                setRouteStops={setRouteStops}
              />
            )}
          />
          <Route
            exact
            path="/ridecost/summary"
            render={props => (
              <Summary
                {...props}
                CurrentLocation={CurrentLocation}
                DestinationLocation={DestinationLocation}
                RouteStops={RouteStops}
                SelectedCar={SelectedCar}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
