import React, { Component } from 'react';

class Camera extends Component {
  render() {
    return (
      <div>
        <h1>Hey!</h1>
        <div>
          <div>
            <video id="camera-stream" width="100%" autoplay="true"></video>
            <button id="capture-button" class="btn btn-primary">Take Photo</button>
          </div>
          <div>
          <canvas id="canvas" width="500" height="400"></canvas>
          <button id="use-this" class="btn btn-primary analyse-btn">Analyse</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Camera;
