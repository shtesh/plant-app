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
console.log('plantid', plantId);
  const userId = req.session.currentUser;
  const user = await User.findById(userId).populate('favorites');
  console.log('user', user);
  const isFavorite = user.favorites.find(plant => String(plant._id) === String(plantId));
 console.log('is favorite', isFavorite);
if(isFavorite) {
  const updateUser = await User.findByIdAndUpdate(userId, {$pull: {favorites: plantId} }, {new: true});
  console.log('update user 1', updateUser);
 return res.redirect('/user/favorites');
}
const updateUser = await User.findByIdAndUpdate(userId, {$push: {favorites: plantId} }, {new: true});
  console.log('update user 2', updateUser);
 return res.redirect('/user/favorites');
};

const deleteFavorites = async (req, res) => {
  const {plantId} = req.params;
  console.log('plantid', plantId);
  const userId = req.session.currentUser;
  const user = await User.findById(userId).populate('favorites');
  console.log('user', user);
  const isFavorite = user.favorites.find(plant => String(plant._id) === String(plantId));
  console.log('is favorite', isFavorite);
  if(isFavorite) {
    const updateUser = await User.findByIdAndDelete(userId, {$push: {favorites: plantId}});
  } 
};

module.exports = {
  getUser,
  updateFavorites,
  getFavoritesPage,
  deleteFavorites
};





