const express = require("express");
const { api3 } = require("../controllers/api3");
const validToken = require("../middlewares/token_auth");

const router = express.Router();

router.get("/api3", validToken, api3);

module.exports = router;
