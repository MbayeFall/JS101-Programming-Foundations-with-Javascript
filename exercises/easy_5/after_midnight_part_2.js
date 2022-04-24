const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function beforeMidnight(time) {

  let arr = time.split(':');
  let hours = Number(arr[0]);
  let minutes = Number(arr[1]);

    totalMinutes = (hours * 60) + minutes;
    let deltaMinutes = MINUTES_PER_DAY - totalMinutes;
    if (deltaMinutes === MINUTES_PER_DAY) return 0;

    return deltaMinutes;  
}

function afterMidnight(time) {
  let arr = time.split(':');
  let hours = Number(arr[0]);
  let minutes = Number(arr[1]);

    totalMinutes = (hours * 60) + minutes;
    if (totalMinutes === MINUTES_PER_DAY) return 0;
    return totalMinutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);