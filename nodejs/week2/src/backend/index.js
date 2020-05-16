const express = require("express");
const app = express();

//middleware
app.use((req, res, next) => {
  const date = new Date();
  const day = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  const time = `${date.getHours()}:${date.getMinutes()}`;
  console.log(`${day} ${time} request received for path: ${req.originalUrl}`);
  next();
});

app.get("/", function(req, res) {
  res.send(`
  <body>
  <h1>NodeJS Week 2</h1>
  </body>
  `);
});

const mealsRouter = require("./routes/meals.js");
const reservationsRouter = require("./routes/reservations.js");
const reviewsRouter = require("./routes/reviews.js");

app.use("/meals", mealsRouter);
app.use("/reservations", reservationsRouter);
app.use("/reviews", reviewsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listning to port ${PORT}`);
});
