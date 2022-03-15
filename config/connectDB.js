//importation mongoose
const mongoose = require("mongoose");
//connect mongoose to server
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("connecteeed");
  } catch (error) {
    console.log(error);
    console.log("fUnable to connect");
  }
};
module.exports = connectDb;
