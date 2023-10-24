const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html");

    const url = req.url;
    const method = req.method;

    if (url === "/") {
        const filePath = path.join(__dirname, 'message.txt');

        fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.write("<html>");
                res.write("<head><title>Enter Message</title></head>");
                res.write("<body>" + data + "</body>");
                res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
                res.write("</html>");
                return res.end();
            }
        });
    } else if (url === "/message" && method === "POST") {
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
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write("<body>");
        res.write("<h1>Hello World!</h1>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
});

server.listen(3000);
