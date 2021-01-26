const User = require("../models/user");

const getUser = async (req, res) => {
  try {
    const userId = req.session.currentUser;
    const user = await User.findById(req.session.currentUser)
      .populate("createdPlants")
      .lean();
    res.render("user/profile", { user, userId });
  } catch (err) {
    res.send(err);
  }
};

const getFavoritesPage = async (req, res) => {
  try {
    const userId = req.session.currentUser;
    const userFav = await User.findById(userId).populate("favorites").lean();
    res.render("user/favorites", { userFav, userId });
  } catch (err) {
    res.send(err);
  }
};

const updateFavorites = async (req, res) => {
  const { plantId } = req.params;
  const userId = req.session.currentUser;
  const user = await User.findById(userId).populate("favorites");
  const isFavorite = user.favorites.find(
    (plant) => String(plant._id) === String(plantId)
  );

  if (isFavorite) {
    await User.findByIdAndUpdate(
      userId,
      { $pull: { favorites: plantId } },
      { new: true }
    );

    return res.redirect("/user/favorites");
  }
  const updateUser = await User.findByIdAndUpdate(
    userId,
    { $push: { favorites: plantId } },
    { new: true }
  );

  return res.redirect("/user/favorites");
};

const deleteFavorites = async (req, res) => {
  const { plantId } = req.params;
  const userId = req.session.currentUser;
  const user = await User.findById(userId).populate("favorites");
  const isFavorite = user.favorites.find(
    (plant) => String(plant._id) === String(plantId)
  );

  if (isFavorite) {
    const updateUser = await User.findByIdAndDelete(userId, {
      $push: { favorites: plantId },
    });
  }
};

module.exports = {
  getUser,
  updateFavorites,
  getFavoritesPage,
  deleteFavorites,
};
