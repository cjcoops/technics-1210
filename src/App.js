import React, { Component } from "react";
import "./App.css";
import { Platter } from "./components";

document.onclick = function(evt) {
  if (!evt.target) evt.target = evt.srcElement; // extend target property for IE
  console.log(evt.target);
};

class App extends Component {
  render() {
    return (
      <div className="technics">
        <div className="interface">
          <Platter />
          <div className="start-stop" />
          <div className="tonearm-holder" />
          <div className="weight" />
          <div className="power" />
          <div className="pitch-adjust" />
        </div>
      </div>
    );
  }
}

export default App;
