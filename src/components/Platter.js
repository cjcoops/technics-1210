import React from "react";
import "./Platter.css";

export function Platter(props) {
  const className = `vinyl vinyl-1 play ${props.paused ? "paused" : ""}`;
  return (
    <div className={className}>
      <div className="grooves" />
      <div className="light" />
      <div className="light-alt" />
      <div className="label">
        <div className="artist">DJ Coops</div>
        <div className="song">A1. Bangin' techno track</div>
      </div>
      <div className="spindle" />
    </div>
  );
}
