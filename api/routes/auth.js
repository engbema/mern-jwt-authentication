const express = require("express");
const { signup, signIn, google, signout } = require("../controller/auth");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signIn);
router.post("/google", google);
router.get("/signout", signout);

module.exports = router;
