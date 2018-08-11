const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const routes = require("./server/routes");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8000;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Database Configuration with Mongoose
// ---------------------------------------------------------------------------------------------------------------
// Connect to localhost if not a production environment
if (process.env.NODE_ENV == "production") {
  // Gotten using `heroku config | grep MONGODB_URI` command in Command Line
  mongoose.connect(
    "mongodb://heroku_v0vnpbfj:73khkido42is3a68sivm9t3vpc@ds263707.mlab.com:63707/heroku_v0vnpbfj"
  );
} else {
  mongoose.connect("mongodb://localhost/DentalUserDB");
}
const db = mongoose.connection;

// Show any Mongoose errors
db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Import the Article model
const Calendar = require("./server/models/calendar");
const Schedule = require("./server/models/schedule");
const User = require("./server/models/user");

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
