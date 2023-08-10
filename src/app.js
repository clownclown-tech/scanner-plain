// app.js
const express = require("express")


const app = express()

module.exports = app


const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/list.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "list.html"));
});

app.get("/generate.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "generate.html"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});


app.get("/basic-qrcode-reader.js", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "basic-qrcode-reader.js"));
});

app.get("/beep.mp3", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "beep.mp3"));
});
