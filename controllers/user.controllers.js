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

const getPlants = async (req, res) => {
  try {
    const plants = await Plant.find().lean();
    console.log(plants);
    const plantsWithOptions = plants.map(plantWithDeleteOptions);
    res.render("plants", { plants: plantsWithOptions, btnText: "All Plants" });
  } catch (err) {
    console.error(err);
  }
};

const getPlant = async (req, res) => {
  try {
    const { plantId } = req.params;
    // Call the Celebrity model's findById method to retrieve the details of a specific celebrity by its id.
    const plant = await Plant.findById(plantId).lean();
    //rendering celebrity-detail view
    res.render("user/plantDetail", {
      ...editFormOptions(plantId),
      ...addToFavoritesOption(plantId),
      ...plant,
    });
  } catch (err) {
    console.error(err);
  }
};

const createPlant = async (req, res) => {
  try {
    // Create an object with keys for name, occupation, and catchPhrase.
    // Values for those keys should come from the form (req.body is the object full of the values from the form)
    const { name, height, light, floweringTime, native, tags, imageURL } = req.body;
    const image = req.file.path;
    const creator = req.sessionUser._id;
    // Create an instance of the Celebrity model with the object you made in the previous step
    const plant = await Plant.create({ name, height, light, floweringTime, native, tags, imageURL});
    const updatedUser = await User.findOneAndUpdate({_id:req.session.currentUser._id},{ $push : {"createdPlants" :  plant._id  }});
    console.log("Update User",updatedUser);
    console.log("plant", plant);
    res.redirect("/profile");
  } catch (err) {
    console.error(err);
  }
};

const updatePlant = async (req, res) => {
  try {
    const { plantId } = req.params;
    const { name, height, light, floweringTime, native, tags, imageURL } = req.body;
    let image;
    if (req.file) {
      image = req.file.path;
    } else {
      image = req.body.existingImage;
    }
    const updatedPlant = await Plant.findByIdAndUpdate(plantId, {
      name,
      height,
      light,
      floweringTime,
      native,
      tags,
      imageURL,
      image
    }, {new: true});
    console.log(updatedPlant);
    res.redirect(`/profile`);
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
    res.redirect("/profile");
  } catch (err) {
    console.log(err);
  }
};

const getFavoritesPage = async (req, res) => {
  try {
    const userFav = await User.findById(req.session.currentUser._id).populate("favoritesPlants").lean();
    res.render("user/favorites",{userFav});
  } catch (err) {
    res.send(err);
  }
};

const updateFavorites = async (req, res) => {
  const {plantId} = req.params;
  const userId = req.session.currentUser;
  const updatedUser = await User.findbyIdAndUpdate(userId, {$push: {favorites: plantId }});
  res.redirect("/favorites");
};



module.exports = {
  getUser,
  getPlants,
  getPlant,
  createPlant,
  updatePlant,
  deletePlant,
  updateFavorites,
  getFavoritesPage
};





