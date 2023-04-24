const router = require("express").Router();
const authenticate = require("../middlewares/authenticate");

const { 
    createUser, 
    createAdmin, 
    getUsers,
} = require("../controllers/userController");

// get users, create user
router.get('/:userType', getUsers);
router.post('/', authenticate, createUser);

// Create Admin Route
router.post("/admins", authenticate, createAdmin);

module.exports = router;