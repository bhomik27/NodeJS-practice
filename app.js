const http = require('http');


const server = http.createServer(  (req, res) => {
    console.log('bhomik');
});

server.listen(4000);