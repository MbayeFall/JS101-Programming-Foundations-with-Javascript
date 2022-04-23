function cleanUp(string) {
 let finalStr = "";
 for (let idx = 0; idx < string.length; idx++) {
   let currentChar = string[idx];
   if (isLetter(currentChar)) {
     finalStr += currentChar;
   } else if (finalStr[finalStr.length - 1] !== " ") {
    finalStr += " ";
   }
 }
 console.log(finalStr)
}

function isLetter(char) {
 return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

cleanUp("---what's my +*& line?");    // " what s my line "