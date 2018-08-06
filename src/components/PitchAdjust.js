import React, { Component } from "react";
import "./PitchAdjust.css";

export class PitchAdjust extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 8 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const pitch = event.target.value;
    this.props.onChange(pitch);
  }

  render() {
    return (
      <div className="pitch-adjust">
        <input
          type="range"
          min="-8"
          max="8"
          step="1"
          value={this.props.pitch}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
