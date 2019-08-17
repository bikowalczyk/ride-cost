import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Cars from "./components/pages/Cars";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/cars" />} />
          <Route exact path="/cars" component={Cars} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
