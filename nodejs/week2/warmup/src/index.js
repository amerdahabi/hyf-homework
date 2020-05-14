const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send(`
    <h1>NODE WARMUP</h1>
    `);
});

app.get("/numbers/add?", function(req, res) {
  const first = Number(req.query.first);
  const second = Number(req.query.second);
  const sum = first + second;
  console.log(req.query);
  res.send(`
    <body>
        <p>The sum is ${sum} </p>
    </body>
    `);
});

app.get("/numbers/multiply/:first/:second", function(req, res) {
  const { first, second } = req.params;
  console.log(req.params);
  const result = first * second;
  res.send(`
        <p>The result is ${result}</p>
    `);
});

app.listen(3000);
