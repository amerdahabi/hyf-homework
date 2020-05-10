const mealsArray = require("../data/meals.json");
const reviewsArray = require("../data/reviews.json");

const getMeals = function(request, response) {
  const mealsWithReviews = mealsArray.map(mealItem => {
    mealItem.reviews = reviewsArray.filter(
      reviewsItem => mealItem.id === reviewsItem.mealId
    );
    return mealItem;
  });

  response.json(mealsWithReviews);
};

module.exports = getMeals;