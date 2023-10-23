const http = require('http');


const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html');

    const url = req.url;
    if (url === '/home') {
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome home </h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (url === '/about') {
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to About Us page</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (url === '/node') {
        res.write('<html>');
        res.write('<head><title>Node</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to my Node Js project</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

  
    
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>');
    res.write('<h1>Hello World!</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();

});

server.listen(3000);