const http = require("http");

// const routes = require("./routes");

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("In the middleware");
    next(); //   this allows the requests to continue in the next middleware
});


app.use((req, res, next) => {
    console.log("In the middleware 2");
    res.send('<h1>Hello from express</h1>')
});


// const server = http.createServer(app);
// server.listen(3000);

//works same as the above code this is done bts in express code
app.listen(3000);
