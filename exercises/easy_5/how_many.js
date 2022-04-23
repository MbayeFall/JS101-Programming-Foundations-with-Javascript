function countOccurrences(vehicles) {
  let obj = {};
  
  for (idx = 0; idx < vehicles.length; idx++) {
    let currentCar = vehicles[idx];
    
    if (obj.hasOwnProperty(currentCar)) {
      obj[currentCar] += 1;
    } else {
      obj[currentCar] = 1;
    }
  }
  for (let car in obj) {
    console.log(`${car} => ${obj[car]}`);
  }
}


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2


// algorithm
// - Create an object
// - iterate over the array one by one 
// - on each iteration
//  - Check if element exist as property of object
//   - if no, add the property and set its value to 1
//   - if yes, increment the value by 1.
// - iterate over the object
// - On each line output the key and the value of the object