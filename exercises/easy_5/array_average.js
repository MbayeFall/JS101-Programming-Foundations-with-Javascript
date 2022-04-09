function average(arr) {
  let total = 0;
  arr.forEach(number => total += number);
  total /= arr.length;
  total = Math.floor(total);
  return total;
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40