const express = require('express');
const { Router } = require("express");
const {
    getUser
} = require("../controllers/user.controllers");
const router = Router();

router
  .get("/", getUser);

module.exports = router;