import React, { Component } from "react";
import "./App.css";

document.onclick = function(evt) {
  if (!evt.target) evt.target = evt.srcElement; // extend target property for IE
  console.log(evt.target);
};

class App extends Component {
  render() {
    return (
      <div className="technics">
        <div className="turntable">
          <span className="start-stop" />
          <span className="tone-arm-circle" />
          <span className="weight" />
          <span className="on-off" />
        </div>
      </div>
    );
  }
}

export default App;
