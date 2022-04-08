function swap(string) {
  if (string.includes(' ')) {
   let arr = string.split(' ');
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
     newArr.push(arr[i].split('').reverse().join(''));
   }
   console.log(newArr.join(' '));
  } else {
    console.log(string.split('').reverse().join(''));
  }
}


swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');            