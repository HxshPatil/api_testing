const express = require("express");
const { api1 } = require("../controllers/api1");

const router = express.Router();

router.get("/api1", api1);

module.exports = router;
