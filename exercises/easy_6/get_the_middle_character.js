function centerOf(string) {
  let center = string.length / 2;
  if (string.length % 2 === 1) {
    console.log(string.slice(center, center + 1))
  } else {
    console.log(string.slice(center - 1, center + 1))
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"