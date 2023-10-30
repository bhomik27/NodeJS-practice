const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const shopController = require('../controllers/shopRoutes');

const router = express.Router();

router.get('/', shopController.getShop);

module.exports = router;