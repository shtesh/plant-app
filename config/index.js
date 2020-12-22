require('dotenv').config();
const mongoose = require("mongoose");

const dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function connectDb() {
  try {
    const {connection} = await mongoose.connect(
      process.env.MONGODB_URI,
      dbOptions
    );
    console.log("Connected to mongo db");
    return connection;
  } catch(err) {
    console.error(err);
  }
}

module.exports = connectDb;