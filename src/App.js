import React, { Component } from "react";
import "./App.css";
import { Platter, Power, StartStop, Audio, PitchAdjust } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerOn: false,
      startButtonDepressed: false,
      recordLoaded: true
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

  stopTrack() {
    console.log("Stop track");
  }

  render() {
    const playing =
      this.state.powerOn &&
      this.state.recordLoaded &&
      this.state.startButtonDepressed;

    return (
      <div className="technics">
        <Audio onEnded={() => this.stopTrack()} playing={playing} />
        <div className="interface">
          <div className="tonearm-holder" />
          <Platter playing={playing} />
          <div className="weight" />
          <StartStop
            depressed={this.state.startButtonDepressed}
            onClick={() => this.handleStartButtonPressed()}
          />
          <Power
            on={this.state.powerOn}
            onClick={() => this.handlePowerButtonClicked()}
          />
          <PitchAdjust />
        </div>
      </div>
    );
  }
}

export default App;
