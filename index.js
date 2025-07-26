require("dotenv").config();

const { createServer } = require("http");
const url = require("url");
const fs = require("fs");

const hostname = 'localhost';
const port = process.env.PORT || 3000;

const server = createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("./index.html", "utf8", (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    } else if (reqUrl.pathname === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("./about.html", "utf8", (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    } else if (reqUrl.pathname === "/contact-me") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("./contact-me.html", "utf8", (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        fs.readFile("./404.html", "utf8", (err, data) => {
            if (err) throw err;
            res.end(data);
        });
    }

    console.log(`Request URL: ${reqUrl.pathname}`);
});

server.listen(port, hostname, () => {
    console.log("server started");
    console.log(`Server running at http://${hostname}:${port}/`);
});


if (process.env.NODE_ENV === "prod") {
  console.log("Enviroment:", process.env.NODE_ENV);
  console.log("Secret Video:", process.env.VIDEO_URL);
}
