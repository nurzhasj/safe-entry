const router = require("express").Router();
const authenticate = require("../middlewares/authenticate");

const { 
    getCars,
} = require("../controllers/carController");

// get all car scans
router.get('/', authenticate, getCars);

module.exports = router;