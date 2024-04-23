const express = require('express');
const router = express.Router();

const controller = require('../controllers/languages.handler');

// Route to handle GET requests for all cities
router.get('/', controller.getLanguages);

module.exports = router;