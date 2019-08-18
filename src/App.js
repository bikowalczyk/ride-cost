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
  const [CarsInfo, setCarInfo] = useState({
    "Toyota Corolla": {
      id: uuid.v1(),
      consumption: 8,
      gprice: 5.32
    }
  });

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
              <Cars {...props} data={CarsInfo} editData={setCarInfo} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
