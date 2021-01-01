const mongoose = require("mongoose");
const Plant = require("../models/plant");
const { plants } = require("./data");
const connectDb = require("../config/index");

async function seedDb() {
  try {
    await connectDb();
    await Plant.create(plants);
    const closedDb = await mongoose.connection.close();
    console.log("close", closedDb);
  } catch (err) {
    console.error(err);
  }
}

seedDb();