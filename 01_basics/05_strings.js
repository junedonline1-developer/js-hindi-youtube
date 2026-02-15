const name = "Juned"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my nsme is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Juned-JS-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("n"));

const newString = gameName.substring(-6, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newSreingOne = "   Juned   "
console.log(newSreingOne);
console.log(newSreingOne.trim());

const url = "https://juned.com/juned%20shaikh"

console.log(url.replace('%20', '-'))

console.log(url.includes('Juned'))
console.log(url.includes('juned'));

console.log(gameName.split('-'));
