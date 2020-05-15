const mealsArray = require("../data/meals.json");
const express = require("express");
const router = express.Router();

const meals = function(req, res) {
  const idString = req.params.id;
  const id = parseInt(idString);
  const { maxPrice, title, createdAfter, limit } = req.query;

  if (id) {
    const mealId = mealsArray.filter(meal => meal.id === id);
    res.json(mealId);
  }

  else if (maxPrice) {
    const cheapMeal = mealsArray.filter(meal => meal.price < maxPrice);
    res.json(cheapMeal);
  }

  else if (title) {
    const mealTitle = mealsArray.filter(meal =>
      meal.title.toLowerCase().includes(title.toLowerCase())
    );
    res.json(mealTitle);
  }

  else if (createdAfter) {
    const mealCreatedDate = mealsArray.filter(
      meal => new Date(meal.createdAt) > new Date(createdAfter)
    );
    res.json(mealCreatedDate);
  }

  else if (limit) {
    const theLimit = parseInt(limit);
    const mealsLimit = mealsArray.slice(0, theLimit);
    res.send(mealsLimit);
  }
  else {
    res.json(mealsArray)
  }
};

router.get("/", meals);
router.get("/:id", meals);

module.exports = router;
