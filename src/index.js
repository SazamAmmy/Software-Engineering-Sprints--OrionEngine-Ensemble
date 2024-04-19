// Importing dependencies
const express = require("express");
const path = require("path");
require('dotenv').config();

const app = express();
const port = 3000;

// Setting up Pug and static files
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "static-css-files")));

const homeRoute = require('./routes/home.route.js');
const aboutRoute = require('./routes/about_us.route.js');
const citiesRoute = require('./routes/cities.route.js');
const signupRoute = require('./routes/signup.route.js');
const loginRoute = require('./routes/login.route.js');

// Using routes
app.use('/', homeRoute);
app.use('/about_us', aboutRoute);
app.use('/cities', citiesRoute);
app.use('/signup', signupRoute);
app.use('/login', loginRoute);

// Starting the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
