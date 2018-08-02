import React from "react";
import "./PitchAdjust.css";

export function PitchAdjust(props) {
  return (
    <div className="pitch-adjust">
      <input type="range" min="-8" max="8" step="1" />
    </div>
  );
}
