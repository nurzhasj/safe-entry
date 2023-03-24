// Building Router
const router = require('express').Router();
// Enabling web camera
const webcam = require('node-webcam');
// Connectting AWS
const AWS = require('aws-sdk');
// Surpressing v2 error message
require('aws-sdk/lib/maintenance_mode_message').suppress = true;
// File system for js
const fs = require('fs');

// Setting up Amazon Rekognition client
const rekognition = new AWS.Rekognition({
    accessKeyId: 'AKIATAHACYEKQFRY65Z2',
    secretAccessKey: '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',
    region: 'us-east-1'
});

// Defining a new route for capturing and processing an image
router.post('/', (req, res) => {
    // Create a new webcam instance
    const camera = webcam.create({
      width: 640,
      height: 480
    });
  
    // Capturing an image from the camera
    camera.capture('image.jpg', (error, data) => {
      if (error) {
        console.error(error);
        res
          .status(500)
          .send('An error occurred while capturing the image.');
      } else {
        // Reading the image data as a binary buffer
        const imageData = fs.readFileSync('image.jpg');
  
        // Set up the Rekognition parameters
        const rekognitionParams = {
          Image: {
            Bytes: imageData
          },
          Attributes: ['ALL']
        };
  
        // Making a face detection request to Amazon Rekognition
        rekognition.detectFaces(rekognitionParams, (err, data) => {
          if (err) {
            console.error(err);
            res
              .status(500)
              .send('An error occurred while processing the image.');
          } else {
            res.send(data);
          }
        });
      }
    });
  });

module.exports = router; 