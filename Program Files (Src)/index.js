// Import dependencies
const express = require("express");
const mysql = require('mysql2');
require('dotenv').config(); // Ensure you have this package if you want to use .env variables

console.log('Ha, this is testing');
console.log('Ha, this is logging');

//Express Set Up
const port = 3000;
const app = express();

//Integrating PUG with Express
app.set("view engine", "pug");

//Serve assets from directory 'static' - CSS Files, images, etc.
app.use(express.static("Static - CSS Files"));

console.log(process.env.NODE_ENV);

//Setup database connection
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST || "localhost",
  user: process.env.DATABASE_USER || "user", // Your database user
  password: process.env.DATABASE_PASSWORD || "password", // Your database password
  database: "world", // Your database name
});

// Landing/Starting Routes
app.get("/", (req, res) => {
  res.render("index");
});

// app.get('/languages', (req, res) => {
//   const query = `
//     SELECT Language, SUM(Population * Percentage / 100) AS NumberOfSpeakers
//     FROM countrylanguage
//     JOIN country ON country.Code = countrylanguage.CountryCode
//     GROUP BY Language
//     ORDER BY NumberOfSpeakers DESC;
//   `;
  
//   connection.query(query, (err, results) => {
//     if (err) {
//       console.error('An error occurred during the database query');
//       res.status(500).send('Server error');
//       return;
//     }
    
//     // Send the results back to the client as JSON
//     res.json(results);
//   });
// });

app.get("/cities", (req, res) => {
  const query = `
  SELECT ID, Name, CountryCode, District, Population
  FROM city
  `;
  db.promise().execute(query)
      .then(([rows]) => {
          res.render("cities", { cities: rows });
      })
      .catch((err) => {
          console.error(err);
          res.sendStatus(500); // Sending status code 500 for Internal Server Error
      });
});


app.get("/api/cities", (req, res) => {
    db.promise().execute("SELECT * FROM `city`")
        .then(([rows]) => {
            res.send(rows);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

// Languages Route


// Route for the home page
app.get("/", (req, res) => {
  // When the home route is accessed, render the 'index' Pug template
  res.render("index");
});

// Route for 'About us' page
app.get("/aboutus", (req, res) => {
  res.render("aboutus");
});

// Route for 'Sign up' page
app.get("/signup", (req, res) => {
  res.render("signup");
});

// Route for 'Login' page
app.get("/login", (req, res) => {
  res.render("login");
});

// Run server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
