const Plant = require('../models/plant');
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

const updateFavorites = async (req, res) => {
  const {plantId} = req.params;
  const userId = req.session.currentUser;
  const updatedUser = await User.findbyIdAndUpdate(userId, {$push: {favorites: plantId }});
  res.redirect("/favorites");
}



module.exports = {
  getUser,
  updateFavorites
};





