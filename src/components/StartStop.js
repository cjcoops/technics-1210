import React from "react";
import "./StartStop.css";

export function StartStop(props) {
  const className = `start-stop ${props.depressed ? "depressed" : ""}`;
  return (
    <div className={className} onClick={props.onClick}>
      {"Start   Stop"}
    </div>
  );
}
