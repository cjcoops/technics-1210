import "./Power.css";
import React from "react";

export function Power(props) {
  let className = `power ${props.on ? "power-on" : ""}`;

  return (
    <div
      className={className}
      // style={{ background: props.on ? "green" : "red" }}
      onClick={props.onClick}
    />
  );
}
