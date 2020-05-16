const mealsArray = require("../data/meals.json");
const express = require("express");
const router = express.Router();

const meals = function(req, res) {
  const idString = req.params.id;
  const id = parseInt(idString);
  const { maxPrice, title, createdAfter, limit } = req.query;

  if (req.originalUrl === "/meals") {
    res.json(mealsArray);
  } else if (id) {
    const mealId = mealsArray.filter(meal => meal.id === id);
    if (mealId.length === 0) {
      res.send("Item not found");
    } else {
      res.json(mealId);
    }
  } else if (maxPrice) {
    const cheapMeal = mealsArray.filter(meal => meal.price < maxPrice);
    if (cheapMeal.length === 0) {
      res.send("Item not found");
    } else {
      res.json(cheapMeal);
    }
  } else if (title) {
    const mealTitle = mealsArray.filter(meal =>
      meal.title.toLowerCase().includes(title.toLowerCase())
    );
    if (mealTitle.length === 0) {
      res.send("Item not found");
    } else {
      res.json(mealTitle);
    }
  } else if (createdAfter) {
    const mealCreatedDate = mealsArray.filter(
      meal => new Date(meal.createdAt) > new Date(createdAfter)
    );
    if (mealCreatedDate.length === 0) {
      res.send("Item not found");
    } else {
      res.json(mealCreatedDate);
    }
  } else if (limit) {
    const theLimit = parseInt(limit);
    const mealsLimit = mealsArray.slice(0, theLimit);
    res.json(mealsLimit);
  } else {
    res.send(`<h1>Parameter not found</h1>`);
  }
};

router.get("/", meals);
router.get("/:id", meals);

module.exports = router;
