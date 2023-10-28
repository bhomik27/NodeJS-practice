const http = require("http");
const bodyParser = require('body-parser');

// const routes = require("./routes");

const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false })); // for parsing

app.use('/admin' , adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>");
})


// const server = http.createServer(app);
// server.listen(3000);

//works same as the above code this is done bts in express code
app.listen(3000);
