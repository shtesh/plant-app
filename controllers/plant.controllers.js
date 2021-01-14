const Plant = require('../models/plant');

const deleteFormOptions = (plantId) => ({
    action: `/plants/${plantId}`,
    btnText: "Delete plant",
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
      const plants = await Plant.find().lean();
      console.log(plants);
      const plantsWithOptions = plants.map(plantWithDeleteOptions);
      res.render("plants", { plants: plantsWithOptions, btnText: "All Plants" });
    } catch (err) {
      console.error(err);
    }
};

const editFormOptions = (plantId) => ({
    action: `/plants/${plantId}`,
    btnText: "Edit plant",
    method: "POST",
    restMethod: "PATCH",
});

const getPlant = async (req, res) => {
    try {
      const { plantId } = req.params;
      // Call the Celebrity model's findById method to retrieve the details of a specific celebrity by its id.
      const plant = await Plant.findById(plantId).lean();
      //rendering celebrity-detail view
      res.render("plantDetail", {
        ...editFormOptions(plantId),
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
      // Create an instance of the Celebrity model with the object you made in the previous step
      const plant = await Plant.create({ name, height, light, floweringTime, native, tags, imageURL });
      console.log("plant", plant);
      res.redirect("/plants");
    } catch (err) {
      console.error(err);
    }
};

const updatePlant = async (req, res) => {
    try {
      const { plantId } = req.params;
      const { name, height, light, floweringTime, native, tags, imageURL } = req.body;
      const updatedPlant = await Plant.findByIdAndUpdate(plantId, {
        name,
        height,
        light,
        floweringTime,
        native,
        tags,
        imageURL
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
      res.redirect("/plants");
    } catch (err) {
      console.log(err);
    }
};

module.exports = {
    getPlants,
    getPlant,
    createPlant,
    updatePlant,
    deletePlant,
};

