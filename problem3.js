// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

const sortCarModelsAlphabetically = (inventory) => {
  if (Array.isArray(inventory)) {
    const carModels = inventory.reduce((acc, car) => {
      if (car.car_model) {
        acc.push(car.car_model);
        return acc;
      }
    }, []);
    return carModels.sort();
  }
};
module.exports = sortCarModelsAlphabetically;
