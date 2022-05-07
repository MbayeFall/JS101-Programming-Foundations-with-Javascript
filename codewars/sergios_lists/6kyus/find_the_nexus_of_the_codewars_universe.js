/*
Not to brag, but I recently became the nexus of the Codewars universe! My honor and my rank were the same number. I cried a little.

Complete the method that takes a hash/object/directory/association list of users, and find the nexus: the user whose rank is the closest is equal to his honor. Return the rank of this user. For each user, the key is the rank and the value is the honor.

If nobody has an exact rank/honor match, return the rank of the user who comes closest. If there are several users who come closest, return the one with the lowest rank (numeric value). The hash will not necessarily contain consecutive rank numbers; return the best match from the ranks provided.

Example
         rank    honor
users = {  1  =>  93,
          10  =>  55,
          15  =>  30,
          20  =>  19,    <--- nexus
          23  =>  11,
          30  =>   2 }
*/

function nexus(users) {
  let obj = {};
  for (let rank in users) {
    let diff = Math.abs(users[rank] - Number(rank))
    obj[rank] = diff;
  }
  let differences = Object.values(obj).sort((a, b) => a - b);
  let lowestDifference = differences[0];
  
  for (let rank in obj) {
    if (obj[rank] === lowestDifference) return Number(rank);
  }
}

/*
input: obj (rank and honor)
output: number (rank)

- find the nexus (a property where property === value)
- if there's no property === value, return property where the gap between property and value is the least 
{
1 : 92
}

- iterate over the object 
- During each iteration, check if property is equal to value of property
  if yes, return rank
  ---------------------------
- create a new obj 
- iterate over the first object 
- during each iteration calculate the difference between the property and the value
  - create a property of the same property name and a value of the difference
- collect the values of the object in an array
- find the lowest value of the object
- iterate over the second obj
- during each iteration, check if property is equal to the lowest difference
  - if yes return that property
*/
