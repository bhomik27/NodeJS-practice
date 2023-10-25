const fs = require("fs");

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;


    if (url === "/") {

        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write("</html>");
        return res.end();
    }

    if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFile("message.txt", message, (err) => {
                if (!err) {
                    res.statusCode = 302;
                    res.setHeader("Location", "/");
                    return res.end();
                } else {
                    console.log(err);
                }
            });
        });
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write("<body>");
        res.write("<h1>Hello World!</h1>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
};


//Export module typer 1 where we export a function
// module.exports = requestHandler;


//export module type 2 where we export an object
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };


//export module type 3 where we export them individullay but will be bundled togetherin exports
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';


//shortcut method for export 
exports.handler = requestHandler;
exports.someText = 'Some hard coded text';