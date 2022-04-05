let numbers = [1, 2, 3, 4];

numbers.splice(0, numbers.length);

while (numbers.length > 0) {
  numbers.pop();
}

numbers.length = 0;