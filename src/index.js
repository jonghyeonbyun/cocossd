import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

class App extends React.Component {
  canvasRef = React.createRef();
  videoRef = React.createRef();

  componentDidMount() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const webCamPromise = navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            facingMode: "user",
          },
        })
        .then((stream) => {
          window.stream = stream;
          this.videoRef.current.srcObject = stream;
          return new Promise((resolve, reject) => {
            this.videoRef.current.onloadedmetadata = () => {
              resolve();
            };
          });
        });
      const modelPromise = cocoSsd.load();
      Promise.all([modelPromise, webCamPromise])
        .then((values) => {
          this.detectFrame(this.videoRef.current, values[0]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  detectFrame = (video, model) => {
    model.detect(video).then((prediction) => {
      this.renderPredictions(prediction);
      requestAnimationFrame(() => {
        this.detectFrame(video, model);
      });
    });
  };

  renderPredictions = (prediction) => {
    const ctx = this.canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const font = "12px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";
    prediction.forEach((prediction) => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];

      ctx.strokeStyle = "#fc685b";
      ctx.lineWidth = 4;
      ctx.strokeRect(x, y, width, height);

      ctx.fillStyle = "#fc685b";
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(font, 8);
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });

    prediction.forEach((prediction) => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];

      ctx.fillStyle = "#FFFFFF";
      ctx.fillText(prediction.class, x, y);
    });
  };
  render() {
    return (
      <div>
        <video
          className="size"
          autoPlay
          playsInline
          muted
          ref={this.videoRef}
          width={window.innerWidth}
          height={window.innerHeight}
        />
        <canvas
          className="size"
          ref={this.canvasRef}
          width={window.innerWidth}
          height={window.innerHeight}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
