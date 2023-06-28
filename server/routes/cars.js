const router = require("express").Router();
const authenticate = require("../middlewares/authenticate");

const { 
    getCars,
    createCar
} = require("../controllers/carController");

// get all car scans
router.get('/', authenticate, getCars);

// create a car
router.post('/', createCar);

module.exports = router;