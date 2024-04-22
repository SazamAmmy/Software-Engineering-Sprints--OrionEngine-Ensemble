const express = require('express');
const router = express.Router();
const { getAllCities, getCityById } = require('../handlers/cities.handler');

// Route to handle GET requests for all cities
router.get('/', async (req, res) => {
    const cities = await getAllCities();
    res.render("Cities/cities", {cities});
});

// Route to handle GET requests for a specific city by ID
router.get('/:id', getCityById);

module.exports = router;
