import "./Power.css";
import React from "react";

export function Power(props) {
  return (
    <div
      className="power"
      style={{ background: props.on ? "green" : "red" }}
      onClick={props.onClick}
    />
  );
}
