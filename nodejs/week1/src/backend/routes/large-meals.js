const mealArray = require("../data/meals.json");
const reviewsArray = require("../data/reviews.json");

const largeMeals = function(request, response) {
  const mealResault = mealArray.map(mealItem => {
    mealItem.review = reviewsArray.filter(reviewItem => reviewItem.mealId === mealItem.id)
    return mealItem
  });

  const result = mealResault.filter(item => item.maxNumberOfGuests >= 10)

  response.json(result);
};

module.exports = largeMeals;
