const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const contactController = require('../controllers/contactRoutes');

const router = express.Router();

router.get('/contact-us', contactController.getContact);

module.exports = router;