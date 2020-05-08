const mealArray = require("../data/meals.json");
const reviewsArray = require("../data/reviews.json");

const cheapMeal = function(request, response) {
  const mealResault = mealArray.map(mealItem => {
    if (mealItem.price <= 50) {
      mealItem.reviews = reviewsArray.filter(
        reviewsItem => mealItem.id === reviewsItem.mealId
      );
      return mealItem;
    } else {
      return;
    }
  });
  response.json(mealResault);
};

module.exports = cheapMeal;
