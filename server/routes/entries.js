const router = require("express").Router();
const authenticate = require("../middlewares/authenticate");

const { 
    createEntry,
} = require("../controllers/entryController");

// get all car scans
router.post('/', createEntry);

module.exports = router;