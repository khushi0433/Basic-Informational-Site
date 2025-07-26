const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const HOST = "127.0.0.1";
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "contact-me.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});

if (process.env.NODE_ENV === "production") {
    console.log("Express is running in production mode " + process.env.NODE_ENV);
    console.log("VIDEO_URL: " + process.env.VIDEO_URL);
}