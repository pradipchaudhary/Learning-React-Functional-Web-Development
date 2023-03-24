console.log("Arrow Function;");

// Normal function

function add(a, b) {
	return a + b;
}

console.log(add(2, 4));

// Arrow function
const addme = (a, b) => {
	console.log(a + b);
};
addme(1, 2);

const findRoot = (a) => {
	return a * a;
};
console.log(findRoot(4));
