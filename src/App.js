import React, { useState } from "react";
import { MapContainer } from "react-leaflet";

import Countries from "./Countries";
import "./App.css";
import { Icon } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";

class App extends React.Component {
  state = {
    mapKey: Math.random(),
    correctCountries: [],
    incorrectCountries: [],
    laterCorrectCountries: [],
    revealedCountries: [],
  };

  clearAll = () => {
    this.setState({
      mapKey: Math.random(),
      correctCountries: [],
      incorrectCountries: [],
      laterCorrectCountries: [],
      revealedCountries: [],
    });
  };

  addCorrectCountry = (country) => {
    this.setState({
      correctCountries: this.state.correctCountries.concat([country]),
    });
  };

  addIncorrectCountry = (country) => {
    this.setState({
      incorrectCountries: this.state.incorrectCountries.concat([country]),
    });
  };

  addLaterCorrectCountry = (country) => {
    this.setState({
      laterCorrectCountries: this.state.laterCorrectCountries.concat([country]),
    });
  };

  addRevealedCountry = (country) => {
    this.setState({
      revealedCountries: this.state.revealedCountries.concat([country]),
    });
  };

  render() {
    return (
      <MapContainer
        style={{ height: "85vh", width: "90vw" }}
        center={[0, 0]}
        zoom={1}
      >
        <div id="country-count"> {this.state.correctCountries.length}/195 </div>
        <div id="clear-button" onClick={this.clearAll}>
          clear all
        </div>
        <Countries
          mapKey={this.state.mapKey}
          correctCountries={this.state.correctCountries}
          addCorrectCountry={this.addCorrectCountry}
          incorrectCountries={this.state.incorrectCountries}
          addIncorrectCountry={this.addIncorrectCountry}
          revealedCountries={this.state.revealedCountries}
          addRevealedCountry={this.addRevealedCountry}
          addLaterCorrectCountry={this.addLaterCorrectCountry}
        />
      </MapContainer>
    );
  }
}

export default App;
