const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const successController = require('../controllers/successRoutes');

const router = express.Router();

router.get('/success', successController.getSuccess);

module.exports = router;