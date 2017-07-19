import React, { Component } from 'react';
import './App.css';
import Webcam from 'react-webcam';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenshot: null,
    };
  }

handleClick = () => {
  const screenshot = this.webcam.getScreenshot();
  this.setState({ screenshot: screenshot });
  console.log(screenshot);
};

verifyScreenshot = () => {
  //this.state.screenshot
  const URL = 'https://api-us.faceplusplus.com/facepp/v3/detect'
  const API_KEY = 'A17lcAjwHWlnTVrmECSWbgmwLS7OsVsY'
  const API_SECRET = 'DNG-T1LUDfJue_F18MCuEnntRZKUk3yE'
  const IMAGE = this.state.screenshot;
  const QUERY = URL + '?api_key=' + API_KEY + '&api_secret=' + API_SECRET+ '&return_landmar=1';

  axios({
    method: 'post',
    url: QUERY,
    data: `image_base64=${IMAGE}`,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
  })
    .then(response => {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });
};

  render() {
    return (
      <div>
        <Webcam
              audio={false}
              height={200}
              ref={node => this.webcam = node}
              screenshotFormat="image/jpeg"
              width={200}/>
            <button onClick={this.handleClick}>Capture</button>
              {
                this.state.screenshot ?
                <img src={this.state.screenshot} /> : null
              }
              {
                this.state.screenshot ?
                <button onClick={this.verifyScreenshot}>Verify Me!</button> : null
              }
      </div>
    );
  }
}

export default App;
