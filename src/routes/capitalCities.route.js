const express = require('express');
const router = express.Router();

const controller = require('../controllers/capitalCities.handler');

// Route to capital city dashboard
router.get('/', (req, res) => res.render('CapitalCities/capitalCities_dashboard'));

// Route to handle GET requests for all capital cities
router.get('/world', controller.getAllCapitalCities);

// Route to handle GET requests for capital cities by continent
router.get('/continent/:continent', controller.getCapitalCitiesByContinent);

// Route to handle GET requests for capital cities by region
router.get('/region/:region', controller.getCapitalCitiesByRegion);

module.exports = router;