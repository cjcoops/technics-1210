import React, { Component } from "react";
import "./App.css";
import { Platter, Power } from "./components";

document.onclick = function(evt) {
  if (!evt.target) evt.target = evt.srcElement; // extend target property for IE
  console.log(evt.target);
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerOn: false,
      spinning: false,
      recordOn: false
    };
  }

  handlePowerButtonClicked() {
    console.log("clicked!");
    this.setState({
      powerOn: !this.state.powerOn
    });
  }

  render() {
    return (
      <div className="technics">
        <div className="interface">
          <div className="tonearm-holder" />
          <Platter />
          <div className="start-stop" />
          <div className="weight" />
          <Power
            on={this.state.powerOn}
            onClick={() => this.handlePowerButtonClicked()}
          />
          <div className="pitch-adjust" />
        </div>
      </div>
    );
  }
}

export default App;
