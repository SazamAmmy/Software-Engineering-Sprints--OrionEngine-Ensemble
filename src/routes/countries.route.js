const express = require('express');
const router = express.Router();

const controller = require('../controllers/countries.handler');

// Route to country dashboard
router.get('/', (req, res) => res.render('Countries/countries_dashboard'));

// Route to handle GET requests for all countries
router.get('/world', controller.getAllCountries);

// Route to handle GET requests for a specific city by Code
router.get('/code/:code', controller.getCountryByCode);

// Route to handle GET requests for cities by continent
router.get('/continent/:continent', controller.getCountriesByContinent);

// Route to handle GET requests for cities by region
router.get('/region/:region', controller.getCountriesByRegion);

// Route to handle GET requests for cities by country Name
router.get('/Name/:Name', controller.getCountriesByCountryName);

module.exports = router;