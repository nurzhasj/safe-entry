const router = require("express").Router();
const authenticate = require("../middlewares/authenticate");

const { 
    createEntry,
    getAllEntries,
} = require("../controllers/entryController");

// get all car scans
router.post('/', createEntry);

// get all entries with user
router.get('/:userType', getAllEntries);

module.exports = router;