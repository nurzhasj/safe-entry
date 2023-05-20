import React, { useRef } from 'react';
import Webcam from "react-webcam";
import axios from 'axios';
import './reco.scss';

export default function Reco() {
  const webcamRef = useRef(null);

  const capture = React.useCallback(
    async () => {
      const imageSrc = webcamRef.current.getScreenshot(); // This is a base64 representation of the image.

      // Here we send imageSrc to the ML model via API
      try {
        const response = await axios.post('https://your-ml-api-url.com/recognize', {
          image: imageSrc
        });

        console.log(response.data);
      } catch (error) {
        console.error('Failed to send image data: ', error);
      }
    },
    [webcamRef]
  );

  return (
    <div className="webcam-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="webcam-frame"
      />
      <button className="capture-button" onClick={capture}>Capture photo</button>
    </div>
  );
};
