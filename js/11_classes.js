// Classes
// console.log("Classes");

// function Vacation(destination, length) {
// 	this.destination = destination;
// 	this.length = length;
// }

// Vacation.prototype.print = function () {
// 	console.log(`${this.destination} | ${this.length} days.`);
// };

// Vacation.prototype.welcomeMessage = function () {
// 	console.log(`Welcome to the ${this.destination}. for ${this.length} days.`);
// };

// const pradip = new Vacation("Pokhara", 7);

// pradip.print();
// pradip.welcomeMessage();

class Vacation {
	constructor(destination, length) {
		this.destination = destination;
		this.length = length;
	}
	print() {
		console.log(`${this.destination} will take ${this.length} deys.`);
	}
}

const trip = new Vacation("Pradip Chaudhary", 7);
trip.print();
