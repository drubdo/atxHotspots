import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import FoodDetails from "./components/FoodDetails";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/FoodDetails" component={FoodDetails} />
      </Switch>
    </div>
  );
}

export default App;
