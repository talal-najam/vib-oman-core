import express from 'express';
import { Model } from 'objection'
import Knex from 'knex';
import knexConfig from './knexfile';
import morgan from 'morgan'
import productRoutes from './routes/products';
import dotenv from 'dotenv';
import 'colors';

dotenv.config();

// Initialize knex.
const knex = Knex(knexConfig.development);

Model.knex(knex);

// Initialize Express
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.API_PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
