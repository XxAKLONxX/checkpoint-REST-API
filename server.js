//importation express
const express = require("express");
//creation instance
const app = express();
//importation dotenv
require("dotenv").config();
//JSON
app.use(express.json());
//conected erver to db
const connectDB = require("./config/connectDB");
connectDB();
//Routes
app.use("/api/contacts", require("./Route/contact")); //path initial du contact

//creation server
const port = process.env.PORT;
app.listen(port, (error) => {
  error ? console.log(error) : console.log(`server connected on port ${port}`);
});




