const http = require("http");
const bodyParser = require('body-parser');

// const routes = require("./routes");

const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // for parsing 

app.use('/add-product', (req, res, next) => {
    res.send('<h1>Add item</h1><form action="/product" method="POST"><input type="text" name="title"><br><h1>Item size</h1> <input type="text" name="size"><button type ="submit">Add item</button></form>')
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express</h1>')
});


// const server = http.createServer(app);
// server.listen(3000);

//works same as the above code this is done bts in express code
app.listen(3000);
