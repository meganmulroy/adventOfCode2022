// 👇️ if using ES6 Imports uncomment line below
// import {readFileSync, promises as fsPromises} from 'fs';
const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  // console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

  // Initialize a new array
  var elvesCalories = [];
  let total = 0

  // Loop over data in array
  arr.forEach(function (str) {

    // Convert data to number
    let number = parseInt(str);

    // check not NaN, which indicates new total should be started
    if (!isNaN(number)) {
      total += number;
    } else {
      elvesCalories.push(total);
      total = 0
    }
  });

  function compareNumbers(a, b) {
    return a - b;
  }

  elvesCalories.sort(compareNumbers);

  const mostCals = elvesCalories.pop();
  const secondMost = elvesCalories.pop();
  const thirdMost = elvesCalories.pop();

  console.log(mostCals + secondMost + thirdMost)

  return arr;
}

syncReadFile('./day1_input.txt');