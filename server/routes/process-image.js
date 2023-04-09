// Building Router
const router = require('express').Router();
// Connectting AWS
const AWS = require('aws-sdk');
// Surpressing v2 error message
require('aws-sdk/lib/maintenance_mode_message').suppress = true;
// Body Parser
const bodyParser = require('body-parser');

// Use body-parser middleware to parse request body as x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// Setting up Amazon Rekognition client
const rekognition = new AWS.Rekognition({
    accessKeyId: 'AKIATAHACYEKQFRY65Z2',
    secretAccessKey: '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',
    region: 'us-east-1'
});

// Defining a new route for processing an image
router.post('/', (req, res) => {
    // Get base64 encoded image data from request body
    const imageData = req.body.image;

    // Check if image data is defined
    if (!imageData) {
      res.status(400).send('Missing image data.');
      return;
    }

    // Decode base64 encoded image data into a binary buffer
    const decodedImage = Buffer.from(imageData, 'base64');

    // Set up the Rekognition parameters
    const rekognitionParams = {
        Image: {
            Bytes: decodedImage
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
            console.log('success!');
        }
    });
});

module.exports = router;