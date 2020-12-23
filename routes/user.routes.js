const express = require('express');
const { Router } = require("express");
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/user.controllers");
const router = Router();

router
  .get("/", getUsers)
  .get("/:userId", getUser)
  .post("/", createUser)
  .patch("/:userId", updateUser)
  .delete("/:userId", deleteUser);

module.exports = router;