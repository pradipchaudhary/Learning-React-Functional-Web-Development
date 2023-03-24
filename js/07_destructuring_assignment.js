console.log("Destructuring Assignment");

const person = {
	name: "Pradip Chaudhary",
	age: 29,
	profession: "Software Engineer",
	skills: ["HTML", "CSS", "JavaScript", "React"],
};

let { name, age } = person;
name = "Younz ENough";
age = 20;
console.log(name, age);

console.log(person.name, person.age);

let printPerson = (regularPerson) => {
	console.log(`${regularPerson.name} and age is ${regularPerson.age}`);
};

let regularPerson = {
	name: "Pradip Chaudhary",
	age: 30,
};

printPerson(regularPerson);

const printPerson1 = ({ name, age }) => {
	console.log(`${name} and ${age} with assignment destructuring.`);
};

printPerson1(regularPerson);

// Arrary assignment destructuring

const personList = ["Ram", "Shyam", "Hari"];

let [person1, person2] = personList;

console.log(person1, person2);
let [...allPeople] = personList;
console.log(...allPeople);

let [, , person3] = personList;

console.log(person3);
