import React, { useState, useRef } from 'react';
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import './recognize.scss';

const Recognize = () => {
  const [image, setImage] = useState(null);
  const videoRef = useRef(null);
  const [hideCameraLogo, setHideCameraLogo] = useState(false);
  const [hideNodeImage, setHideNodeImage] = useState(false);
  const [personId, setPersonId] = useState(null);
  const [status, setStatus] = useState(null);

  const handleCapture = async () => {
    const canvas = document.createElement('canvas');
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');
    if (!image) {
        setImage(dataUrl);
    }
  };

  const handleStartCapture = () => {
    setHideCameraLogo(true);
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      });
  };

  const handleStopCapture = () => {
    const video = videoRef.current;
    const stream = video.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    video.srcObject = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!image) {
      console.log("Image is not captured yet");
      return;
    }
  
    const canvas = document.createElement('canvas');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext('2d').drawImage(img, 0, 0);
      const imageData = canvas.toDataURL('image/jpeg');

      const formData = new URLSearchParams();
      formData.append('base64Img', imageData.split(',')[1]);

      console.log(imageData.split(',')[1]);
  
      fetch('https://safe-entry-flask-app.azurewebsites.net/recognize_person', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      })
        .then(response => {
          alert('Access Granted!')
          console.log('Response:', response);
          handleStopCapture();
          setHideNodeImage(true);
        })
        .then((data) => {
          console.log(data);
          setPersonId(data.person_id);
          setStatus(data.status);
          handleStopCapture();
          setHideNodeImage(true);
        })
        .catch(error => {
          console.error('Error:', error);
          handleStopCapture();
        });

        console.log(`Person ID: ${personId}`);
    };
    img.src = image;
  };
  

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="addImagesContainer">
          <h1 className="title">Recognize Test {personId} / {status}</h1>
          <div className="camera-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Face_ID_logo.svg/800px-Face_ID_logo.svg.png" className={`cameraLogo ${hideCameraLogo ? 'hidden' : ''}`} alt="" />
            <div className="video-wrapper">
              <video ref={videoRef} className="camera"></video>
            </div>
            <div className="controls">
              <button onClick={handleStartCapture}>Start</button>
              <button onClick={handleStopCapture}>Stop</button>
              <button onClick={handleCapture}>Capture</button>
            </div>
          </div>
          <div className="images-preview">
            {image && <img src={image} className={`nodeImage ${hideNodeImage ? 'hidden' : ''}`} alt="preview 1" />}
          </div>
          <button type='submit' className='submitBut' onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Recognize;
