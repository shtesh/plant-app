const express = require('express');
const router = express.Router();
const {logout} = require("../controllers/auth.controllers");

router.post("/", logout);

module.exports = router;