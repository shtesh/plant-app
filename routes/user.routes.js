const { Router } = require("express");
const {
    getUser,
    updateFavorites,
    getFavoritesPage
} = require("../controllers/user.controllers");

function isLoggedIn(req, res, next) {
  console.log("Session", req.session);
  if(req.session.currentUser) {
    return next();
  }
    res.redirect('/auth/login');
}

const router = Router();

router
  .get("/profile", getUser)
  .get("/favorites", getFavoritesPage)
  .post("/favorites/:plantId", updateFavorites);


module.exports = router;