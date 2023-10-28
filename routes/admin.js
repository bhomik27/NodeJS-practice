const express = require('express');

const router = express.Router();


//  admin/add-product  => GET request
router.get('/add-product', (req, res, next) => {
    res.send('<h1>Add item</h1><form action="/admin/add-product" method="POST"><input type="text" name="title"><br><h1>Item size</h1> <input type="text" name="size"><button type ="submit">Add item</button></form>')
});


//  admin/add-product  => POSt request
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;

