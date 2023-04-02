//moi con duong dan den thanh Rome

function preOrderPrice(originalPrice) {
  return originalPrice * 0.8;
}

function promotionPrice(originalPrice) {
  return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}

function defaultPrice(originalPrice) {
  return originalPrice;
}

function blackfridayPrice(originalPrice) {
  return originalPrice * 0.5;
}

// function getPrice(originalPrice, typePromotion) {
//   if (typePromotion === "preOrder") {
//     return preOrderPrice(originalPrice);
//   }

//   if (typrPromotion === "promotion") {
//     return promotionPrice(originalPrice);
//   }

//   if (typePromotion === "default") {
//     return defaultPrice(originalPrice);
//   }
// }

const getPriceStrategies = {
  preorder: preOrderPrice,
  promotion: promotionPrice,
  blackfriday: blackfridayPrice,
  default: defaultPrice,
};

function getPrice(originalPrice, typePromotion) {
  return getPriceStrategies[typePromotion](originalPrice);
}

console.log(`PRICE:: `, getPrice(200, "promotion"));
