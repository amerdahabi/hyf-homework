const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send(`
  <body>
  <h1>NodeJS Week 2</h1>
  </body>
  `)
});

const mealsRouter = require("./routes/meals.js");
const reservationsRouter = require("./routes/reservations.js");
const reviewsRouter = require("./routes/reviews.js")

app.use('/meals', mealsRouter);
app.use('/reservations', reservationsRouter);
app.use('/reviews', reviewsRouter)

app.listen(3000)
