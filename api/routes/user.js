const express = require("express");
const { test } = require("../controller/user");
const router = express.Router();

router.get("/", test);

module.exports = router;
