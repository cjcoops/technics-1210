import React, { Component } from "react";
import "./App.css";
import { Platter, Power, StartStop } from "./components";

// document.onclick = function(evt) {
//   if (!evt.target) evt.target = evt.srcElement; // extend target property for IE
//   console.log(evt.target);
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerOn: false,
      startButtonDepressed: false,
      recordLoaded: false
    };
  }

  handlePowerButtonClicked() {
    this.setState({
      powerOn: !this.state.powerOn
    });
  }

  handleStartButtonPressed() {
    this.setState({
      startButtonDepressed: !this.state.startButtonDepressed
    });
  }

  render() {
    return (
      <div className="technics">
        <div className="interface">
          <div className="tonearm-holder" />
          <Platter paused={!this.state.startButtonDepressed} />
          <div className="weight" />
          <StartStop
            depressed={this.state.startButtonDepressed}
            onClick={() => this.handleStartButtonPressed()}
          />
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
