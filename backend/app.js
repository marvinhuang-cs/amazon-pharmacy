// amazon-pharmacy app

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

// database set up
const { Client } = require("pg");
const client = new Client(process.env.DATABASE_URL || "postgresql:///amazon-pharmacy");
client.connect();

app.get("/", async function(req, res, next) {
    try {
      const products = await client.query(`SELECT id, name, price, description, photo_url FROM products`);
      return res.json(products.rows);
    }
    catch (err) {
      return next(err);
    }
  });

module.exports = app;