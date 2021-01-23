const express = require('express');
const router = express.Router();
const parser = require('./../config/cloudinary.config');

const {showFormSignUp, signUp} = require("../controllers/auth.controllers");

router.get("/", showFormSignUp).post("/", parser.single('profilePicture') ,signUp);

module.exports = router; 