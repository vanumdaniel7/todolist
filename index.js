require("dotenv").config();
const path = require("path");
const express = require("express");
const db = require("./db/mongodb.js");
const routes = require("./routes/routes.js");
const PORT = 3000;
const app = express();

db.connect();
app.use(express.json());
app.use("/api/v1", routes);
app.use(express.static(path.join(__dirname, "./client/build/")));
app.get("*", (req, res) => { res.sendFile(path.join(__dirname, "./client/build/index.html"))});
app.listen(PORT);