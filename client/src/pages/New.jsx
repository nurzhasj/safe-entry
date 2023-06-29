import React, { useState, useRef } from 'react';
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import './new.scss';

const NewUser = () => {
  // User Info State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [uid, setUid] = useState("");

  // default password
  const password = "123456789";
 
  // Image Capture State
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const videoRef = useRef(null);
  const [captureDisabled, setCaptureDisabled] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image1 || !image2 || !image3) {
      console.log("Images are not captured yet");
      return;
    }

    if(!firstName || !lastName || !email || !userType || !uid) {
      console.log("All fields are not filled yet");
      return;
    }

    const canvas1 = document.createElement('canvas');
    const img1 = new Image();
    img1.onload = () => {
      canvas1.width = img1.width;
      canvas1.height = img1.height;
      canvas1.getContext('2d').drawImage(img1, 0, 0);
      const imageData1 = canvas1.toDataURL('image/jpeg').split(',')[1];

      const canvas2 = document.createElement('canvas');
      const img2 = new Image();
      img2.onload = () => {
        canvas2.width = img2.width;
        canvas2.height = img2.height;
        canvas2.getContext('2d').drawImage(img2, 0, 0);
        const imageData2 = canvas2.toDataURL('image/jpeg').split(',')[1];

        const canvas3 = document.createElement('canvas');
        const img3 = new Image();
        img3.onload = () => {
          canvas3.width = img3.width;
          canvas3.height = img3.height;
          canvas3.getContext('2d').drawImage(img3, 0, 0);
          const imageData3 = canvas3.toDataURL('image/jpeg').split(',')[1];

          const user = {
            user: {
              firstName,
              lastName,
              email,
              password,
              userType,
              uid,
              images: [imageData1, imageData2, imageData3]
            }
          };

          // Log the user data excluding the images
          console.log({
            firstName,
            lastName,
            email,
            password,
            userType,
            uid,
          });

          // Log the lengths and first few characters of the image data
          console.log('Image 1 data length:', imageData1.length, 'First 100 chars:', imageData1.slice(0, 100));
          console.log('Image 2 data length:', imageData2.length, 'First 100 chars:', imageData2.slice(0, 100));
          console.log('Image 3 data length:', imageData3.length, 'First 100 chars:', imageData3.slice(0, 100));
          
          fetch('http://127.0.0.1:5000/get_embedding', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          })
            .then(response => {
              console.log('Response:', response);
              alert("User has been added to the system !")
              handleStopCapture();
              resetForm();
            })
            .catch(error => {
              alert("Unable to add the user !")
              console.error('Error:', error);
            });
        };
        img3.src = image3;
      };
      img2.src = image2;
    };
    img1.src = image1;
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setUserType("");
    setUid("");
    setImage1(null);
    setImage2(null);
    setImage3(null);
  };

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="newUser">
          <h1 className="newUserTitle">New User 👳🏽‍♂️</h1>
          <form className="newUserForm" onSubmit={handleSubmit}>
            <div className="formFieldsContainer">
            <div className="newUserItem">
              <label>First Name</label>
              <input type="text" placeholder="Nurzhas" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="newUserItem">
              <label>Last Name</label>
              <input type="text" placeholder="Nurbayev" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="newUserItem">
              <label>Email</label>
              <input type="email" placeholder="nur@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="newUserItem">
                <label>Role</label>
                <select className="newUserSelect" id="role" value={userType} onChange={(e) => setUserType(e.target.value)}>
                  <option value="student">Student</option>
                  <option value="employee">Employee</option>
                </select>
              </div>
            <div className="newUserItem">
              <label>UID</label>
              <input type="text" placeholder="190103276" value={uid} onChange={(e) => setUid(e.target.value)} />
            </div>
            </div>
            <div className="addImagesContainer">
              <h1 className="title">Add Images</h1>
              <div className="camera-container">
                <video ref={videoRef} className="camera"></video>
                <div className="controls">
                  <button onClick={handleStartCapture}>Start</button>
                  <button onClick={handleStopCapture}>Stop</button>
                  <button onClick={handleCapture} disabled={captureDisabled}>Capture</button>
                </div>
              </div>
              <div className="images-preview">
                {image1 && <img src={image1} alt="preview 1" />}
                {image2 && <img src={image2} alt="preview 2" />}
                {image3 && <img src={image3} alt="preview 3" />}
              </div>
              <button type="submit" className="newUserButton">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
