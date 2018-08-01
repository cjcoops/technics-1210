import React from "react";
import "./Audio.css";

export function Audio(props) {
  const audioElement = document.getElementById("audio");
  if (props.playing) {
    audioElement && audioElement.play();
  } else {
    audioElement && audioElement.pause();
  }

  return (
    <audio
      onEnded={props.stopTrack}
      id="audio"
      src="https://s3-us-west-2.amazonaws.com/react-technics/sample1.mp3"
      controls
      preload="auto"
      autobuffer="true"
    />
  );
}
