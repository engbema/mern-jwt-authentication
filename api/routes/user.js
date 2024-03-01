const express = require("express");
const { test, updateUser } = require("../controller/user");
const { verifyToken } = require("../utils/verifyUser");
const router = express.Router();

router.get("/", test);
router.post("/update/:id", verifyToken, updateUser);

module.exports = router;
