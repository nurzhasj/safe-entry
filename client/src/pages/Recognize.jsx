import React, { useEffect, useState, useRef } from 'react';
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { useNavigate } from 'react-router-dom';
import './recognize.scss';

// Web Socket import
import io from 'socket.io-client';

const Recognize = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [socketRef, setSocketRef] = useState(null);

  const [image, setImage] = useState(null);
  const videoRef = useRef(null);
  const [hideCameraLogo, setHideCameraLogo] = useState(false);
  const [hideNodeImage, setHideNodeImage] = useState(false);
  
  useEffect(() => {
    const socket = io("http://localhost:8800");
    setSocketRef(socket);
    return () => socket.disconnect();  // Disconnect when the component unmounts.
  }, []);

  const handleCapture = async () => {
    const canvas = document.createElement('canvas');
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');
    setImage(dataUrl);
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
    setIsLoading(true);

    // const entryData = {
    //   userId: "6402208dc77d7e3c0dbe29aa",
    //   enterDate: new Date(),
    //   exitDate: new Date()
    // };

    const entryData = {
      enterDate: new Date(),
      exitDate: new Date()
    };
  
    if (!image) {
      console.log("Image is not captured yet");
      return;
    }
  
    const canvas = document.createElement('canvas');
    const img = new Image();
    img.onload = async () => {
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext('2d').drawImage(img, 0, 0);
      const imageData = canvas.toDataURL('image/jpeg');
  
      const formData = new URLSearchParams();
      formData.append('base64Img', imageData.split(',')[1]);
  
      console.log(imageData.split(',')[1]);
  
      await fetch('http://127.0.0.1:5000/recognize_person', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      })
      .then(async response => {
        if (response.ok) {
          const data = await response.json();
          console.log('Response:', data);
          console.log(data.personId);
          alert('Access Granted!')
          handleStopCapture();
          setHideNodeImage(true);
          entryData.userId = data.person_id; // Assuming personId is returned from the response
          createEntry(entryData);
        } else {
          throw new Error('Recognition Failed!')
        }
      })
      .catch(error => {
        console.error('Error:', error);
        handleStopCapture();
      });

    };
    img.src = image;
  
    const createEntry = async (entryData) => {
      try {
        const response = await fetch('http://localhost:8800/api/entries', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(entryData),
        });
  
        const data = await response.json();
  
        console.log(data);
  
        // Emit the new entry data to the server.
        socketRef.emit('newEntry', data);
  
        navigate('/students');
      } catch (error) {
        console.error('Error:', error);
      }
    };   

    setIsLoading(false);
  };
  

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="addImagesContainer">
          <h1 className="title">Recognize Test </h1>
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
          <button type='submit' className='submitBut' onClick={(e) => handleSubmit(e)}>
              {isLoading ? <div className="spinner"></div> : "Scan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recognize;
