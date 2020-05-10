const mealsArray = require("../data/meals.json");
const reviewsArray = require("../data/reviews.json");

const getMeal = function(request, response) {
  const meal = mealsArray.map(mealItem => {
    mealItem.reviews = reviewsArray.filter(
      reviewItem => mealItem.id === reviewItem.mealId
    );
    return mealItem;
  });
  const random = Math.floor(Math.random() * mealsArray.length);
  response.json(meal[random]);
};

module.exports = getMeal;