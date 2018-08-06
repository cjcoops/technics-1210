import React from "react";
import "./Audio.css";

export function Audio(props) {
  const audioElement = document.getElementById("audio");
  if (audioElement) {
    audioElement.playbackRate = 1 + props.pitch / 100;
    if (props.playing) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
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
