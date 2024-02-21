const Problem2 = require("../problem2");
const inventory = require("../data");

const result = Problem2(inventory);
console.log(`Last car is a ${result[0].car_make} ${result[0].car_model}`);
