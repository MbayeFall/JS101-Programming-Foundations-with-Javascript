function generateUUID() {
let characters = [0, 1, 2, 3, 4, 5, 6 , 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];  
let sections = [8, 4, 4, 4, 12];

let uuid = '';

for (let index = 0; index < sections.length; index += 1) {
  for (let times = 0; times < sections[index]; times += 1) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    uuid += characters[randomIndex];
  }
  if (index !== sections.length - 1) uuid += '-';
}
return uuid
}
