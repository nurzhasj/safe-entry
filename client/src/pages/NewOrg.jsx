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
  
    if (!image1) {
      console.log("Images are not captured yet");
      return;
    }
  
    const canvas1 = document.createElement('canvas');
  const img1 = new Image();
  img1.onload = () => {
    canvas1.width = img1.width;
    canvas1.height = img1.height;
    canvas1.getContext('2d').drawImage(img1, 0, 0);
    const imageData1 = canvas1.toDataURL('image/jpeg');

    const canvas2 = document.createElement('canvas');
    const img2 = new Image();
    img2.onload = () => {
      canvas2.width = img2.width;
      canvas2.height = img2.height;
      canvas2.getContext('2d').drawImage(img2, 0, 0);
      const imageData2 = canvas2.toDataURL('image/jpeg');

      const canvas3 = document.createElement('canvas');
      const img3 = new Image();
      img3.onload = () => {
        canvas3.width = img3.width;
        canvas3.height = img3.height;
        canvas3.getContext('2d').drawImage(img3, 0, 0);
        const imageData3 = canvas3.toDataURL('image/jpeg');

        fetch('http://localhost:8800/api/process-images', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            frontImage: imageData1.split(',')[1],
            leftImage: imageData2.split(',')[1],
            rightImage: imageData3.split(',')[1],
            userId: '12345'
          }),
        })
          .then(response => {
            alert('Access Granted!')
            console.log('Response:', response);
            handleStopCapture();
            setHideNodeImage1(true);
            setHideNodeImage2(true);
            setHideNodeImage3(true);
          })
          .catch(error => {
            console.error('Error:', error);
            handleStopCapture();
          });
      };
      img3.src = image3;
    };
    img2.src = image2;
  };
  img1.src = image1;
  };

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="newUser">
          <h1 className="newUserTitle">New User</h1>
          <form className="newUserForm">
            <div className="newUserItem">
              <label>Username</label>
              <input type="text" placeholder="john" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="newUserItem">
              <label>Full Name</label>
              <input type="text" placeholder="John Smith" value={fullname} onChange={(e) => setFullname(e.target.value)} />
            </div>
            <div className="newUserItem">
              <label>Email</label>
              <input type="email" placeholder="john@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="newUserItem">
              <label>Password</label>
              <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="newUserItem">
              <label>Phone</label>
              <input type="text" placeholder="+1 123 456 78" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="newUserItem">
              <label>Address</label>
              <input type="text" placeholder="New York | USA" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
          </form>
        </div>
        <div className="addImagesContainer">
          <h1 className="title">Add Images</h1>
          <div className="camera-container">
            <img src="https://i.pinimg.com/originals/c0/4c/07/c04c077aaeef7709c735cbbb6c131793.jpg" className={`cameraLogo ${hideCameraLogo ? 'hidden' : ''}`} alt="" />
            <div className="video-wrapper">
              <video ref={videoRef} className="camera"></video>
            </div>
            <div className="controls">
              <button onClick={handleStartCapture}>Start</button>
              <button onClick={handleStopCapture}>Stop</button>
              <button onClick={handleCapture} disabled={captureDisabled}>Capture</button>
            </div>
          </div>
          <div className="images-preview">
            {image1 && <img src={image1} className={`nodeImage ${hideNodeImage1 ? 'hidden' : ''}`} alt="preview 1" />}
            {image2 && <img src={image2} className={`nodeImage ${hideNodeImage2 ? 'hidden' : ''}`} alt="preview 2" />}
            {image3 && <img src={image3} className={`nodeImage ${hideNodeImage3 ? 'hidden' : ''}`} alt="preview 3" />}
          </div>
          <button type='submit' className='submitBut' onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default NewUser;