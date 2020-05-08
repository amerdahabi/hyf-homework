const mealArray = require("../data/meals.json");
const reviewsArray = require("../data/reviews.json");

const largeMeals = function(request, response) {
  const mealResault = mealArray.map(mealItem => {
    if (mealItem.maxNumberOfGuests > 10) {
      mealItem.reviews = reviewsArray.filter(
        reviewItem => mealItem.id === reviewItem.mealId
      );
      return mealItem;
    } else {
      return;
    }
  });
  response.json(mealResault);
};

module.exports = largeMeals;
