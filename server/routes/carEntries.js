const router = require("express").Router();
const authenticate = require("../middlewares/authenticate");

const { 
    getCarEntries,
    createCarEntry
} = require("../controllers/carEntryController");

// get all car scans
router.get('/', getCarEntries);

// create a car entry
router.post('/', createCarEntry);

module.exports = router;