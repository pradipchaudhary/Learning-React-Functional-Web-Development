// console.log("Spread Operator:");

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// const arr3 = [...arr1, ...arr2];
// const [last] = arr3.reverse();
// console.log(last);
// console.log(arr3);

// const a1 = ["Ram", "Shyam"];
// const a2 = ["Hari", "Gita"];

// const arrjoin = [...a1, ...a2];

// console.log(arrjoin.join(" - "));

function directions(...args) {
	let [start, ...remaing] = args;
	let [finish, ...stops] = remaing.reverse();
	console.log(finish);
	console.log(stops);

	console.log(`drive through ${args.length} towns`);
	console.log(`start in ${start}`);
	console.log(`the destination is ${finish}`);
	console.log(`stopping ${stops.length} times in between`);
}

console.log(directions("d1", "d2", "d3", "d4"));

// Object

const studentDetail = {
	name: "Jeeban",
	class: 3,
};
const schoolName = "evergreen Boarding School";

const jeebandetail = {
	...studentDetail,
	schoolName,
};
console.log(jeebandetail);
