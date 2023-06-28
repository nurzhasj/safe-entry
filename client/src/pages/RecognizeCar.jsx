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
  
      // Your fetch function...

    };
    img.src = image;
  
    // The rest of your code...
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
