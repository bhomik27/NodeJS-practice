const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const adminController
    = require('../controllers/adminRoutes');

const router = express.Router();


//  admin/add-product  => GET request
router.get('/add-product', adminController.getAddProduct);


//  admin/add-product  => POSt request
router.post('/add-product', adminController.postAddProduct)

module.exports = router;

