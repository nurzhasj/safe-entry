import React, { useEffect, useState } from 'react';
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { useNavigate } from 'react-router-dom';
import './recognize.scss';

const Recognize = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const entryData = {
      scanDate: new Date()
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
  
      await fetch('http://localhost:8800/api/carEntries', {
        method: 'GET',
        // headers: {
        //   'Content-Type': 'application/x-www-form-urlencoded',
        // },
        //body: formData.toString(),
      })
      .then(async response => {
        if (response.ok) {
          const data = await response.json();
          console.log('Response:', data);
          alert('Access Granted!')
          entryData.carId = "649ca2cbaf31e7622b7cc27b"; // Assuming carId is returned from the response
          await createEntry(entryData);  
        } else {
          throw new Error('Recognition Failed!')
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

    };
    img.src = image;
  
    const createEntry = async (entryData) => {
      try {
        const response = await fetch('http://localhost:8800/api/carEntries', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(entryData),
        });
  
        const data = await response.json();
  
        console.log(data);
  
        // Emit the new entry data to the server.
        // socketRef.emit('newEntry', data);

        navigate('/cars');
        
      } catch (error) {
        console.error('Error:', error);
      }
    };   
  };

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="addImagesContainer">
          <h1 className="title">Recognize Car </h1>
          <div className="camera-container">
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
          <div className="images-preview">
            {image && <img src={image} alt="preview" />}
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
