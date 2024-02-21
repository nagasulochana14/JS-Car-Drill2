// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

const getOlderCarsCount = (inventory, year) => {
  if (Array.isArray(inventory) && year) {
    const allYears = inventory.filter((car) => {
      if (car.car_year < year) {
        console.log(car);
        return car;
      }
    });
    return allYears;
  }
};
module.exports = getOlderCarsCount;
