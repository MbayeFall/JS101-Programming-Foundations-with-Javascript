let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesObj = {};

flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});

flintstonesObj; // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }