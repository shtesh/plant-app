const { Router } = require("express");
const {
  getPlants,
  getPlant,
  createPlant,
  updatePlant,
  deletePlant,
} = require("../controllers/plant.controllers");
const router = Router();
router
  .get("/", getPlants)
  .get("/:plantId", getPlant)
  .post("/", createPlant)
  .post("/:plantId/edit", updatePlant)
  .post("/:plantId/delete", deletePlant);

module.exports = router;
