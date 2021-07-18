const express = require("express");
const { Model } = require("objection");
const Knex = require("knex");
const knexConfig = require("./knexfile");

// Initialize knex.
const knex = Knex(knexConfig.development);

// Give the knex instance to objection.
Model.knex(knex);

require("dotenv").config();

const app = express();

const PORT = process.env.API_PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, console.log(`server started on port ${PORT}`));
