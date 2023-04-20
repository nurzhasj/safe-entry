const router = require("express").Router();
const authenticate = require("../middlewares/authenticate");

const { 
    createUser, 
    createAdmin, 
    getUsers 
} = require("../controllers/userController");

// get users, create user
router.route('/')
    .get(getUsers)
    .post(authenticate, createUser);

// Create Admin Route
router.post("/admins", authenticate, createAdmin);

module.exports = router;