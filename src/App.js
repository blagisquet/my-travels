import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";
import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Babou's travels </h1>
        </header>
        {Travels.map(travel => (
            <Travel photo={travel.photo} destination={travel.destination}
                    country={travel.country} distance={travel.distance}/>
        ))}
      </div>
    );
  }
}

export default App;
