// this allows to stash "artificial env variables" in a file
require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000; // fallback is nice

const server = express();

server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, "client/build")));

server.get("/", (req, res) => {
  res.send(`<h1>Web 45 ROCKS!</h1>`);
});

server.get("/api", (req, res) => {
  res.json({ message: "Web 45 is awesome!" });
});

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
