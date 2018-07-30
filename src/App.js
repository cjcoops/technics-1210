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

    const audioElement = document.getElementById("audio");
    audioElement.play();
  }

  stopTrack() {
    console.log("stopped");
  }

  render() {
    return (
      <div className="technics">
        <div className="tune">
          <button data-id_track="1" className="play play-1">
            Play
          </button>
          <audio
            onEnded={() => this.stopTrack()}
            id="audio"
            className="track-1"
            src="https://s3-us-west-2.amazonaws.com/react-technics/sample1.mp3"
            controls
            preload="auto"
            autobuffer="true"
          />
        </div>
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
