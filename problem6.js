// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

const getBMWAndAudiCars = (inventory) => {
  if (Array.isArray(inventory)) {
    const cars = inventory.filter((car) => {
      if (car.car_make === "BMW" || car.car_make === "Audi") {
        return car;
      }
    });
    return cars;
  }
};
module.exports = getBMWAndAudiCars;
