const router = require("express").Router();
const authenticate = require("../middlewares/authenticate");

const { 
    createUser, 
    createAdmin, 
    getUsers,
    getUser,
} = require("../controllers/userController");

// get all users by type
router.get('/:userType', getUsers);

// get a single user by entry id
router.get('/entry/:entryId', getUser);

// craete a user
router.post('/', authenticate, createUser);

// Create Admin Route
router.post("/admins", authenticate, createAdmin);

module.exports = router;