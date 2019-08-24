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
              <Cars {...props} data={CarsInfo} setCarInfo={setCarInfo} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
