// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

/*
input: 2 objects
output: number

Problem: Based on given recipe and ingredients that are currently available, determine how many cakes can be baked

- no units
- all ingredients that not in obj1 are counted as 0 

numOfCakes = 0;
obj1                                 obj2
{flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}


- create a variable that represents the number of cakes initialized to 0
- iterate over the first given object, during each iteration:
  - check if theres a property on obj2 that matches the current property on obj1
  - if there isn't break out of the loop
  - if there is, check if it's value in obj2 is superior than it's value on obj1
    - if it's superior, remove the value on obj1 from obj2
    - if not enough break out of the loop
  - increment numOfCakes and repeat
- return numOfCakes
*/

function cakes(recipe, ingredients) {
  let numOfCakes = 0;

  while (true) {
    let breakLoop = false;
    for (let ingredient in recipe) {
      if (ingredients.hasOwnProperty(ingredient)) {
        if (ingredients[ingredient] >= recipe[ingredient]) {
          ingredients[ingredient] -= recipe[ingredient];
        } else breakLoop = true;
      } else breakLoop = true;
    }
    if (breakLoop === true) break;
    numOfCakes++;
  }
  console.log(numOfCakes)
  return numOfCakes;
}

console.log(cakes({"flour": 500, "sugar": 200, "eggs": 1},{"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200}) == 2);
console.log(cakes({"cream": 200, "flour": 300, "sugar": 150, "milk": 100, "oil": 100},{"sugar": 1700, "flour": 20000, "milk": 20000, "oil": 30000, "cream": 5000}) == 11);
console.log(cakes({"apples": 3, "flour": 300, "sugar": 150, "milk": 100, "oil": 100},{"sugar": 500, "flour": 2000, "milk": 2000}) == 0);
console.log(cakes({"apples": 3, "flour": 300, "sugar": 150, "milk": 100, "oil": 100},{"sugar": 500, "flour": 2000, "milk": 2000, "apples": 15, "oil": 20}) == 0);
console.log(cakes({"eggs": 4, "flour": 400},{}) == 0);
console.log(cakes({"cream": 1, "flour": 3, "sugar": 1, "milk": 1, "oil": 1, "eggs": 1},{"sugar": 1, "eggs": 1, "flour": 3, "cream": 1, "oil": 1, "milk": 1}) == 1);
