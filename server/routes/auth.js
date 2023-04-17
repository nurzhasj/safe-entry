// Express Router
const router = require("express").Router();
// Auth Controller
const { signIn } = require("../controllers/authController");


router.post("/", signIn);

module.exports = router;