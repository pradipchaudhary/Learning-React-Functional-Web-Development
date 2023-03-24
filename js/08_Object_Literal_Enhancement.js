// console.log("Object Literal Enhancements:");
// let name = "Learning React Functional Web";
// let version = "0.0.2";
// let detail = function () {
// 	console.log(`${this.name} and version : ${this.version}`);
// };
// let learnBook = { name, version, detail };
// console.log(learnBook.name, learnBook.version);

// learnBook.detail();

// Old and New version Object Syntax
const driver1 = {
	name: "Younz",
	speed: 50,
	car: "Honda",
	speedUp: function (speedup) {
		this.speed = this.speed + speedup;
		console.log("New Speed " + this.speed);
	},
};

driver1.speedUp(8);

const driver2 = {
	name: "Pradip",
	speed: 100,
	car: "Farari",
	speedUp(speedup) {
		this.speed = this.speed + speedup;
		console.log(`New Car Speed : ${this.speed}`);
	},
};

driver2.speedUp(40);
