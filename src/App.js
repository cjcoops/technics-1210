import React, { Component } from "react";
import "./App.css";

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
