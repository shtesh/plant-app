const express = require('express');
const { Router } = require("express");
const {
    getUser,
    getPlant,
    getPlants,
    createPlant,
    updatePlant,
    deletePlant,
    updateFavorites,
    getFavoritesPage
} = require("../controllers/user.controllers");

function isLoggedIn(req, res, next) {
  if(req.session.currentUser) next();
  else res.redirect('/login');
}


const router = Router();

router
  .get("/user/profile", isLoggedIn, getUser)
  .get("/user/profile/:plantId", isLoggedIn, getPlant)
  .get("/user/profile/:plantId", isLoggedIn, getPlants)
  .get("/plantDetail/:plantId", isLoggedIn, getPlant)
  .get("/favorites", isLoggedIn, getFavoritesPage)
  .post("/favorites/:plantId", isLoggedIn, updateFavorites)
  .post("/profile/:plantId/delete", isLoggedIn, deletePlant);



module.exports = router;