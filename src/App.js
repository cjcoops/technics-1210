import React, { Component } from "react";
import "./App.css";
import { Platter, Power, StartStop, Audio, PitchAdjust } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerOn: false,
      startButtonDepressed: false,
      recordLoaded: true,
      pitch: 0
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

  stopTrack() {}

  handlePitchChanged(pitch) {
    this.setState({
      pitch
    });
  }

  render() {
    const playing =
      this.state.powerOn &&
      this.state.recordLoaded &&
      this.state.startButtonDepressed;

    return (
      <div className="technics">
        <Audio
          onEnded={() => this.stopTrack()}
          playing={playing}
          pitch={this.state.pitch}
        />
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
          <PitchAdjust
            onChange={pitch => this.handlePitchChanged(pitch)}
            pitch={this.state.pitch}
          />
        </div>
      </div>
    );
  }
}

export default App;
