const express=require("express");
const { api2 }= require("../controllers/api2");
const validToken = require("../middlewares/token_auth");

const router= express.Router();

router.get("/api2",validToken,api2);

module.exports=router;