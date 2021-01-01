require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const path         = require('path');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

const connectDb = require("./config/index");
const plantsRoutes = require("./routes/plant.routes");

const connectSession = require('./config/session.config');

connectDb();
connectSession(app);


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
const index = require('./routes/index.routes');
const signUp = require('./routes/signup.routes');
const login = require("./routes/login.routes");
const logout = require("./routes/logout.routes");
const main = require("./routes/main.routes");
const private = require("./routes/private.routes");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/auth/signup", signUp);
app.use("/auth/login", login);
app.use("/auth/logout", logout);
app.use("/main", main);
app.use("/private", private);


app.use(express.static(path.join(__dirname, 'public')));




app.get("/", (req, res) => res.render("index"));
app.use("/plants", plantsRoutes);

app.listen(process.env.PORT);

module.exports = app;