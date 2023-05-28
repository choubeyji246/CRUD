const { default: mongoose } = require("mongoose");
require('dotenv').config();

const connection = async () => {
  const URL = process.env.database_link
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting database", error);
  }
};

module.exports = connection;
