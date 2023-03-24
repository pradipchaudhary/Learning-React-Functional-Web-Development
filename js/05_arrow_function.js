// Method one

// const dharan = {
// 	resorts: ["Hotel Inn", "Namaste Hotel", "Ratna hotel"],
// 	print: function (delay = 2000) {
// 		setTimeout(function () {
// 			console.log(this);
// 		}, delay);
// 	},
// };
// dharan.print();

// method 2
// const biratnagar = {
// 	schools: ["school1", "school2", "school3", "school4"],
// 	print: (delay = 1000) => {
// 		setTimeout(() => {
// 			console.log(this); // this is windows object
// 			console.log(this.schools.join(","));
// 		});
// 	},
// };

// biratnagar.print();

//

const schoolList = {
	schools: ["Ramjank", "Satayadebi", "evergreen", "Merryland"],
	print: function (delay = 2000) {
		setTimeout(() => {
			console.log(this.schools.join(","));
		}, delay);
	},
};

schoolList.print();
