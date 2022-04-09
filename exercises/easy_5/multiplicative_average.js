function multiplicativeAverage(arr) {
  total = 1;
  arr.forEach(number => total *= number);
  total /= arr.length
  return total.toFixed(3);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"