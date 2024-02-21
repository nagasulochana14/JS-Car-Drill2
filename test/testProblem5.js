const problem5 = require("../problem5");
const inventory = require("../data");

const result = problem5(inventory,2000);
console.log(result);
console.log(`Number of cars older than 2000:`,result.length);