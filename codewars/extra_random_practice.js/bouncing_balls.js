// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Example:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 
// (Condition 2) not fulfilled).

/*
input: 3 numbers (h, b, w)
output: number 

Problem: based on 3 given numbers h, b, w  find the number of times the mother from window height will see a ball bounces
- 

conditions
- h > 0
- bounce > 0 and < 1
- window must be less than h

- if conditions not met return -1

times = 1;
height after bounce  = h * bounce => 1.98
if 1.98 > w increment times 2
reassigned height to 1.98

- if condition is not met return -1
- create a variable named numOfTimes set to 1
WHILE LOOP
- create a varible heightAfterBounce initialized to the value of h * b
- if heightAfterBounce > w increment times by 2 and reassing h to heightAfterBounce
- else break
END OF WHILE LOOP
return numOfTimes
*/

function bouncingBall(h, b, w) {
  if (!(h > 0 && (b > 0 && b < 1) && w < h)) return -1;

  let numOfTimes = 1;

  while (true) {
    let heightAfterBounce = h * b;

    if (heightAfterBounce > w) {
      numOfTimes += 2;
      h = heightAfterBounce;
    } else break;
  }

  return numOfTimes;
}

console.log(bouncingBall(3, 0.66, 1.5) == 3)
console.log(bouncingBall(30, 0.66, 1.5) == 15)
console.log(bouncingBall(30, 0.75, 1.5) == 21)
console.log(bouncingBall(30, 0.4, 10) == 3)
console.log(bouncingBall(40, 1, 10) == -1)
console.log(bouncingBall(-5, 0.66, 1.5) == -1)
console.log(bouncingBall(1, 0.66, 0.66) == 1)
console.log(bouncingBall(1, 0.66, 1) == -1)
