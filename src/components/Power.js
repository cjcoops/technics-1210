import "./Power.css";
import React from "react";

export function Power(props) {
  let className = `power ${props.on ? "power-on" : ""}`;

  return (
    <div className={className} onClick={props.onClick}>
      Power
    </div>
  );
}
