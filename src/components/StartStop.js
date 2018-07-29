import React from "react";
import "./StartStop.css";

export function StartStop(props) {
  return (
    <div className="start-stop" onClick={props.onClick}>
      {props.depressed ? ">" : "\u25A0"}
    </div>
  );
}
