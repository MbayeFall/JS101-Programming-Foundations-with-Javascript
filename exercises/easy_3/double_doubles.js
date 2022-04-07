function twice(number) {
  number = String(number);
  if (number.slice(0, (number.length / 2)) === number.slice(number.length / 2)) {
    console.log(Number(number));
  } else {
    console.log(Number(number * 2))
  }
};

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676