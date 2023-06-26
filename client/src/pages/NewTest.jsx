import React, { useState, useRef } from 'react';
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import './new.scss';

const NewUser = () => {
  // User Info State
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [active, setActive] = useState("");

  // Image Capture State
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [captureDisabled, setCaptureDisabled] = useState(false);
  const videoRef = useRef(null);
  const [hideCameraLogo, setHideCameraLogo] = useState(false);
  const [hideNodeImage1, setHideNodeImage1] = useState(false);
  const [hideNodeImage2, setHideNodeImage2] = useState(false);
  const [hideNodeImage3, setHideNodeImage3] = useState(false);

  const handleCapture = () => {
    const canvas = document.createElement('canvas');
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');
    if (!image1) {
      setImage1(dataUrl);
    } else if (!image2) {
      setImage2(dataUrl);
    } else if (!image3) {
      setImage3(dataUrl);
      setCaptureDisabled(true);
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
    setCaptureDisabled(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // ... your existing form submission logic here ...

    const userData = {
      username: username,
      fullname: fullname,
      email: email,
      password: password,
      phone: phone,
      address: address,
      gender: gender,
      active: active,
    };

    const formData = new FormData();
    formData.append("userData", JSON.stringify(userData));
    formData.append("frontImage", image1.split(',')[1]);
    formData.append("leftImage", image2.split(',')[1]);
    formData.append("rightImage", image3.split(',')[1]);

    fetch('http://localhost:8800/api/process-images', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        // handle successful form submission
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="newUser">
          <h1 className="newUserTitle">New User</h1>
          <form className="newUserForm" onSubmit={handleSubmit}>
            {/* User info fields go here */}
            {/* ... your existing user form fields here ... */}
            <div className="newUserItem">
              <label>Address</label>
              <input type="text" placeholder="New York | USA" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>

            <div className="addImagesContainer">
              <h1 className="title">Add Images</h1>
              <div className="camera-container">
                <img src="https://i.pinimg.com/originals/c0/4c/07/c04c077aaeef7709c735cbbb6c131793.jpg" className={`cameraLogo ${hideCameraLogo ? 'hidden' : ''}`} alt="" />
                <div className="video-wrapper">
                  <video ref={videoRef} className="camera"></video>
                </div>
                <div className="controls">
                  <button type="button" onClick={handleStartCapture}>Start</button>
                  <button type="button" onClick={handleStopCapture}>Stop</button>
                  <button type="button" onClick={handleCapture} disabled={captureDisabled}>Capture</button>
                </div>
              </div>
              <div className="images-preview">
                {image1 && <img src={image1} className={`nodeImage ${hideNodeImage1 ? 'hidden' : ''}`} alt="preview 1" />}
                {image2 && <img src={image2} className={`nodeImage ${hideNodeImage2 ? 'hidden' : ''}`} alt="preview 2" />}
                {image3 && <img src={image3} className={`nodeImage ${hideNodeImage3 ? 'hidden' : ''}`} alt="preview 3" />}
              </div>
            </div>
            <button type='submit' className='submitBut'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUser;