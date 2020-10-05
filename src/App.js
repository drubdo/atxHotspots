import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import FoodDetails from "./components/FoodDetails";
import AttractionDetails from "./components/AttractionDetails"
import HotelDetails from "./components/HotelDetails";
import NavbarHeader from "./components/NavbarHeader"

function App() {
  return (
    <div>
      <NavbarHeader/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/FoodDetails" component={FoodDetails} />
        <Route exact path="/AttractionDetails" component={AttractionDetails} />
        <Route exact path="/HotelDetails" component={HotelDetails} />
      </Switch>
    </div>
  );
}

export default App;
