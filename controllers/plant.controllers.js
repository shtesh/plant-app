const Plant = require("../models/plant");
const User = require("../models/user");

const deleteFormOptions = (plantId) => ({
  action: `/user/favorites/${plantId}`,
  btnText: "DELETE",
  method: "POST",
  restMethod: "DELETE",
});

function plantWithDeleteOptions(plant) {
  const deleteOptions = deleteFormOptions(plant._id);
  return {
    ...plant,
    ...deleteOptions,
  };
}

const getPlants = async (req, res) => {
  try {
    const { plantName = "" } = req.query;
    const userId = req.session.currentUser;
    const plants = await Plant.find().lean();
    const plantsWithOptions = plants
      .filter((plant) =>
        plant.name.toLowerCase().includes(plantName.toLowerCase())
      )
      .map(plantWithDeleteOptions);
    res.render("plants", {
      plants: plantsWithOptions,
      btnText: "All Plants",
      userId,
    });
  } catch (err) {
    res.send(err);
  }
};

const getPlant = async (req, res) => {
  try {
    const userId = req.session.currentUser;
    0;
    const { plantId } = req.params;
    if (userId) {
      const user = await User.findById(userId).lean();
      const plant = await Plant.findById(plantId).lean();
      // checking if the current plant (plantId) is already inside the user favorites plants array
      const isFavoritePlant = user.favorites.find(
        (id) => String(id) === String(plantId)
      );
      // we check if the id saved in the plant.owner is the same as the loggedin user
      const isOwner = String(userId) === String(plant.owner);
      // if thats the case 'isFavoritePlant' is going to be a truthy value (String) if not undefined
      return res.render("plantDetail", {
        ...plant,
        userId,
        isFavoritePlant,
        isOwner,
      });
    }
    const plant = await Plant.findById(plantId).lean();
    res.render("plantDetail", { ...plant, userId });
  } catch (err) {
    console.error(err);
  }
};

const createPlant = async (req, res) => {
  try {
    // Create an object with keys for name, occupation, and catchPhrase.
    // Values for those keys should come from the form (req.body is the object full of the values from the form)
    const userId = req.session.currentUser;
    // we spread (...req.body) to copy all of its keys which are the values of the inputs in the create form, also we add the userId as the owner of the plant
    const createdPlant = await Plant.create({ ...req.body, owner: userId });
    res.redirect("/plants");
  } catch (err) {
    console.error(err);
  }
};

const updatePlant = async (req, res) => {
  try {
    const { plantId } = req.params;
    const updatedPlant = await Plant.findByIdAndUpdate(plantId, req.body, {
      new: true,
    });
    res.redirect(`/plants/${plantId}`);
  } catch (err) {
    console.log(err);
  }
};

const deletePlant = async (req, res) => {
  try {
    const { plantId } = req.params;
    // Use the Celebrity model's findByIdAndRemove method to delete the celebrity by its id.
    const deletedPlant = await Plant.findByIdAndDelete(plantId);
    console.log("Deleted plant", deletedPlant);
    res.redirect("/user/favorites");
  } catch (err) {
    console.log(err);
  }
};

const getFavoritesPage = async (req, res) => {
  try {
    const userFav = await User.findById(req.session.currentUser._id)
      .populate("favoritesPlants")
      .lean();
    res.render("user/favorites", { userFav });
  } catch (err) {
    res.send(err);
  }
};

// const updateFavorites = async (req, res) => {
//   const { plantId } = req.params;
//   const userId = req.session.currentUser;
//   const updatedUser = await User.findbyIdAndUpdate(userId, {$push: {favorites: plantId }});
//   res.redirect("/favorites");
// };

module.exports = {
  getPlants,
  getPlant,
  createPlant,
  updatePlant,
  deletePlant,
  getFavoritesPage,
};
