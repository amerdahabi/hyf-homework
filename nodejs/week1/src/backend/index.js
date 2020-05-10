const express = require('express');
const app = express();
 

app.get('/', function (req, res) {
  res.send(`
  <body>
  <h1>NodeJS Week 1</h1>
  </body>
  `)
});

const mealsRouter = require("./routes/meals.js");
app.get('/meals', mealsRouter);
 
const cheapMealsRouter = require("./routes/cheap-meals.js");
app.get('/cheap-meals', cheapMealsRouter);

const largeMealsRouter = require("./routes/large-meals.js");
app.get('/large-meals', largeMealsRouter);

const mealRouter = require("./routes/meal.js");
app.get('/meal', mealRouter);

const reservations = require("./routes/reservations.js");
app.get('/reservations', reservations);

const reservation = require("./routes/reservation.js");
app.get('/reservation', reservation);

app.listen(3000)