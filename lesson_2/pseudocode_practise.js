/*
1 

A FUNCTION THAT RETURNS THE SUM OF TWO NUMBERS

Casual
Save the first number into a variable
Save the second number into a variable
save the sum of the two numbers to a variable
return the sum

Formal
START
SET firstNum = first number 
SET secondNum = second number 
SET result = firstNum + secondNum
PRINT result 
END



2

A FUNCTION THAT TAKES AN ARRAY OF STRINGS AND RETURNS A STRING THAT IS ALL THOSE STRINGS CONCATENATED TOGETHER

Casual
Create an empty string and store in a variable
Iterate over the array one by one  
On each iteration, add the value of the index to the empty string
return the final string

Formal
START
SET finalStr = ""
SET iterator = 1
WHILE iterator <= length of strings 
finalStr = finalStr + value within the array of strings at space "iterator"
PRINT finalStr
END



3

A METHOD THAT TAKES AN ARRAY OF INTEGERS, AND RETURNS A NEW ARRAY WITH EVERY OTHER ELEMENT FROM THE ORIGINAL ARRAY, STARTING WITH THE FIRST ELEMENT.

Casual
Create an empty array and store it in a variable
iterate over the array of integers with an increment of 2 starting from the first index
On each iteration, add the index to the array created initially
Return the new array 

Formal
START
SET newArr = []
SET iterator = 1
WHILE iterator <= length of the array
newArr = newArr + value within the array of integers at space "iterator"
iterator = iterator + 2
PRINT newArr



4

A FUNCTION THAT DETERMINES THE INDEX OF THE 3RD OCCURENCE OF A GIVEN CHARACTER IN A STRING. FOR INSTANCE, IF THE GIVEN CHARACTER IS "X" AND THE STRING IS "AXBXCDXEX", THE FUNCTION SHOULD RETURN 6 (THE INDEX OF THE 3RD "X"). IF THE GIVEN CHARACTER DOES NOT OCCUR AT LEAST 3 TIMES, RETURN NULL.

Casual
Create a variable that we'll use as a counter and set it to 0
Iterate over the array one by one starting from the first index 
On each iteration, check if the value is equal to the given character
if it is equal, increment variable by one
As soon as counter equal 3 during iteration, return the value of the iterator
if the counter does not reach 3 then return null

Formal
START
SET counter = 0;
SET iterator = 1 
WHILE iterator <= length of string 
IF given character = value within string at space "iterator"
counter = counter + 1

IF counter = 3 
PRINT "iterator"

iterator = iterator + 1

When loop ends with counter < 3
PRINT null



5

A FUNCTION THAT TAKES TWO ARRAYS OF NUMBERS AND RETURNS THE RESULT OF MERGING THE ARRAYS. THE ELEMENTS OF THE FIRST ARRAY SHOULD BECOME THE ELEMENTS AT THE EVEN INDEXES OF THE RETURNED ARRAY, WHILE THE ELEMENTS OF THE SECOND ARRAY SHOULD BECOME THE ELEMENTS AT THE ODD INDEXES. 

Casual
Create an empty array and store it to a variable
Iterate over the entire length of the array one by one
On each iteration:
add the value of the element of the first array at the index of the iterator to the variable created earlier
do the same for the second array 
Return the variable initially created

Formal
START
SET newArr = []
SET iterator = 1
WHILE iterator <= length of one of the given arrays
newArr = newArr + value of first given array at space "iterator"
newArr = newArr + value of second given array at space "iterator"
iterator = iterator + 1

PRINT newArr
*/