function greetings(arr, obj) {
  let fullName = arr.join(' ');
  console.log(`Hello, ${fullName}! Nice to have a ${obj.title} ${obj.occupation} around.`);
};

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });