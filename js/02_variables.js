// Var

var piza = true;
piza = false;
console.log(piza);

// const Variables
// const pizza = true;
// pizza = false;
// console.log(pizza);

var topic = "JavaScript";
if (topic) {
	var topic = "React";
	console.log("inner : " + topic);
}
console.log("Outer : " + topic);

let message = "Global variables";
if (message) {
	let message = "Block Scope Variable";
	console.log(message);
}
console.log(message);

var div,
	container = document.getElementById();
