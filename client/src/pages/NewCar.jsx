import React, { useState, useEffect } from 'react';
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import './new.scss';

const NewUser = () => {
  // User Info State
  const [plateNumber, setPlateNumber] = useState("");
  const [modelName, setModelName] = useState("");
  const [userID, setUserID] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8800/api/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  // Image Upload State
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      console.log("Image is not uploaded yet");
      return;
    }

    if(!plateNumber || !modelName || !userID) {
      console.log("All fields are not filled yet");
      return;
    }

    const canvas = document.createElement('canvas');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext('2d').drawImage(img, 0, 0);
      const imageData = canvas.toDataURL('image/jpeg').split(',')[1];

      const car = {
          licensePlate: plateNumber,
          modelName: modelName,
          ownerId: userID,
      };

      // Log the user data excluding the images
      console.log({
        plateNumber,
        modelName,
        userID,
      });

      // Log the lengths and first few characters of the image data
      console.log('Image data length:', imageData.length, 'First 100 chars:', imageData.slice(0, 100));
      
      fetch('http://localhost:8800/api/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
      })
        .then(response => {
          console.log('Response:', response);
          alert("Car has been added to the system !")
        })
        .catch(error => {
          alert("Unable to add the car !")
          console.error('Error:', error);
        });
    };
    img.src = image;
  };

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="newUser">
          <h1 className="newUserTitle">New Car 🚘</h1>
          <form className="newUserForm" onSubmit={handleSubmit}>
            <div className="formFieldsContainer">
              <div className="newUserItem">
                <label>Plate Number</label>
                <input type="text" placeholder="Plate Number" value={plateNumber} onChange={(e) => setPlateNumber(e.target.value)} />
              </div>
              <div className="newUserItem">
                <label>Model Name</label>
                <input type="text" placeholder="Model Name" value={modelName} onChange={(e) => setModelName(e.target.value)} />
              </div>
              <div className="newUserItem">
                <label>User ID</label>
                <select className="newUserSelect" value={userID} onChange={(e) => setUserID(e.target.value)}>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.firstName} {user.lastName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="addImagesContainer">
              <h1 className="title">Add Image</h1>
              <div className="file-upload" style={{ display: 'flex', flexDirection: 'row' }}>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {image && <img src={image} alt="preview" style={{ width: '50px', height: '50px' }} />}
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