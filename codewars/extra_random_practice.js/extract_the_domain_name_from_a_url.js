// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

/*
input: string 
output: string

Problem: return the domain name of a URL

- empty string , return empty string

['"https://www.', 'http://www.', 'https://' , 'http://', 'www.']

- create an array of all the possible prefixes
- iterate over the possible prefixes one by one, during each iteration:
  - check if given URL starts with current prefix
    - if true, split the string into an array using the prefix as a seperator and reassign the value
    - remove empty chars
    - break

- join the result
- split it again using the '.' as a separator
- return the first index
*/

function domain_name(url) {
  let prefixes = ['https://www.', 'http://www.', 'https://' , 'http://', 'www.'];
  
  for (let idx = 0; idx < prefixes.length; idx++) {
    let prefix = prefixes[idx]
    if (url.startsWith(prefix)) {
     url = url.split(prefix).filter(char => char !== '');
     break;
    }
  }
  url = url.join('').split('.');
  
  return url[0]; 
}

console.log(domain_name("http://github.com/carbonfive/raygun") == "github" )
console.log(domain_name("http://www.zombie-bites.com") == "zombie-bites")
console.log(domain_name("https://www.cnet.com") == "cnet")
console.log(domain_name("http://google.com") == "google")
console.log(domain_name("http://google.co.jp") == "google")
console.log(domain_name("www.xakep.ru") == "xakep")
console.log(domain_name("https://youtube.com") == "youtube")
