function doubleNumbers(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    numbers[counter] = currentNum * 2;

    counter += 1;
  }

  return numbers;
}