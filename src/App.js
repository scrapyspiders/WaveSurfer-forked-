import React, { useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { Button, Slider } from "antd";
import "antd/dist/antd.css";
import "./styles.css";

const App = () => {
  const [wave, setWave] = useState(null);
  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: "#waveform",
      waveColor: "#e8e8e8",
      progressColor: "#0087dc"
    });

    wavesurfer.load(
      "https://ia802803.us.archive.org/17/items/oar2006-01-14.mix.flac16/oar2006-01-14d2t02.mix.mp3"
    );
    setWave(wavesurfer);
  }, []);

  return (
    <div className="App">
      <h1>Hello WaveSurfer.js</h1>
      <div id="waveform"></div>
      <div style={{ margin: "12px 0px" }}>
        <Button
          style={{ marginRight: "12px" }}
          type="primary"
          onClick={() => wave.play()}
        >
          Play
        </Button>
        <Button onClick={() => wave.pause()}>Pause</Button>
      </div>
      <div>Zoom Slider</div>
      <div style={{ width: "50%", marginLeft: "25%" }}>
        <Slider
          min={0}
          max={2000}
          tipFormatter={(val) => val}
          onChange={(val) => wave.zoom(val)}
        />
      </div>
    </div>
  );
};
export default App;
