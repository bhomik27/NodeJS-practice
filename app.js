const path = require('path');

const http = require("http");
const bodyParser = require('body-parser');

// const routes = require("./routes");

const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');
const successRoutes = require('./routes/success');

app.use(bodyParser.urlencoded({ extended: false })); // for parsing

app.use(express.static(path.join(__dirname, 'public')))


app.use('/admin' , adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})


// const server = http.createServer(app);
// server.listen(3000);

//works same as the above code this is done bts in express code
app.listen(3000);
