const express = require('express');
const router = express.Router();

const controller = require('../controllers/cities.handler');

// Route to city dashboard
router.get('/', (req, res) => res.render('Cities/cities_dashboard'));

// Route to handle GET requests for all cities
router.get('/world', controller.getAllCities);

// Route to handle GET requests for a specific city by ID
router.get('/id/:id', controller.getCityById);

// Route to handle GET requests for cities by continent
router.get('/continent/:continent', controller.getCitiesByContinent);

// Route to handle GET requests for cities by region
router.get('/region/:region', controller.getCitiesByRegion);

// Route to handle GET requests for cities by country Name
router.get('/countryName/:countryName', controller.getCitiesByCountryName);

// Route to handle GET requests for cities by country Code
router.get('/countryCode/:countryCode', controller.getCitiesByCountryCode);

// Route to handle GET requests for cities by district
router.get('/district/:district', controller.getCitiesByDistrict);

module.exports = router;
