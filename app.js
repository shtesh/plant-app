require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const path         = require('path');
const connectDb = require("./config");
const plantsRoutes = require("./routes/plant.routes");

connectDb ();
// Middleware Setup
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  const { _method } = req.body;
  if (_method) {
    req.method = _method;
  }
  next();
});

hbs.registerPartials(`${__dirname}/views/partials/`);

app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));




app.get("/", (req, res) => res.render("index"));
app.use("/plants", plantsRoutes);

app.listen(process.env.PORT);