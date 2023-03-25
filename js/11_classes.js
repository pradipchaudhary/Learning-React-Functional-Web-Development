// Classes
console.log("Classes");

function Vacation(destination, length) {
	this.destination = destination;
	this.length = length;
}

Vacation.prototype.print = function () {
	console.log(`${this.destination} | ${this.length} days.`);
};

const pradip = new Vacation("Pokhara", 7);

pradip.print();
