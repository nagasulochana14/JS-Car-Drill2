const problem1 = require("../problem1");
const inventory = require("../data");

const result = problem1(inventory, 33);
if (result) {
  console.log(
    `Car 33 is a ${result[0].car_year} ${result[0].car_make} ${result[0].car_model}`
  );
} else {
  console.log("Car 33 is not found");
}
