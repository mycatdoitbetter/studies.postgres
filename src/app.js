const express = require("express");
const cors = require("cors");

const app = express();

const index = require("./routes/index");
const productRoute = require("./routes/contactsRoutes.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));

app.use(index);
app.use("/api/", productRoute);

module.exports = app;
