const express = require('express');
const app = express();
const mealArray = require("./data/meals.json");
 
app.get('/', function (req, res) {
  res.send(`
  <body>
  <h1>NodeJS Week 2</h1>
  </body>
  `)
});

const mealsRouter = require("./routes/meals.js");
app.get('/meals', mealsRouter);

const reservations = require("./routes/reservations.js");
app.get('/reservations', reservations);

app.get('/meal/:id', function(req, res) {
  const id = req.query.id;
  
})

app.listen(3000)