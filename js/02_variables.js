// Var

// var piza = true;
// piza = false;
// console.log(piza);

// // const Variables
// // const pizza = true;
// // pizza = false;
// // console.log(pizza);

// var topic = "JavaScript";
// if (topic) {
// 	var topic = "React";
// 	console.log("inner : " + topic);
// }
// console.log("Outer : " + topic);

// let message = "Global variables";
// if (message) {
// 	let message = "Block Scope Variable";
// 	console.log(message);
// }
// console.log(message);

// var div,
// 	container = document.getElementById("container");

// for (var i = 0; i < 5; i++) {
// 	div = document.createElement("div");
// 	div.onclick = function () {
// 		alert("This is a box # " + i);
// 	};
// 	container.appendChild(div);
// }

// method 2

// for (let i = 0; i < 5; i++) {
// 	div = document.createElement("div");
// 	div.onclick = function () {
// 		alert("This is a box # " + i);
// 	};
// 	container.appendChild(div);
// }

// for (var i = 0; i < 5; i++) {}
// console.log(i);

// for (let j = 0; j < 5; j++) {}
// console.log(j);

// let age = 20;
// let age == 30;
// console.log(age);
let name = "John";
function getName() {
	let name = "Younz";
	console.log(name);
}

console.log(name);
getName();
console.log(name);
