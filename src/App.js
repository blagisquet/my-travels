import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Babou's travels </h1>
        </header>
        <Travel
          destination="Toronto"
          country="Canada"
          distance="6600"
          photo="https://www.clc.fr/medias/_cache/produits/472/imagePrincipale/1920_1440/panorama-sejour-linguistique-toronto.jpg"
        />
        <Travel
          destination="Cleveland"
          country="USA"
          distance="7500"
          photo="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ffortunedotcom.files.wordpress.com%2F2018%2F07%2Fcleveland-ohio-fbi-arrest-july-4.jpg&w=1000&q=85"
        />
      </div>
    );
  }
}

export default App;
