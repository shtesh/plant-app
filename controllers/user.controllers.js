const User = require('../models/user');

const getUser = async (req,res) => {
  try{
    console.log(req.session.currentUser);     
    const user = await User.findById(req.session.currentUser).populate("createdPlants").lean();
    console.log("User check", user);
    res.render("user/profile", {user});
  } catch (err) {
    res.send(err);
  }
};

const getFavoritesPage = async (req, res) => {
  try {
    console.log(req.session.currentUser);
    const userFav = await User.findById(req.session.currentUser).populate("favorites").lean();
    console.log("User favorites", userFav);
    res.render("user/favorites",{userFav});
  } catch (err) {
    res.send(err);
  }
};

const updateFavorites = async (req, res) => {
  const {plantId} = req.params;
  const userId = req.session.currentUser;
  const updatedUser = await User.findByIdAndUpdate(userId, {$push: {favorites: plantId }},{new: true});
  console.log(updatedUser);
  res.redirect("/user/favorites");
};

module.exports = {
  getUser,
  updateFavorites,
  getFavoritesPage
};





