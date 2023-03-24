var add = (a = 5, b = 10) => console.log(a + b);
add();
("use strict");
var add = function () {
	var x = arguments.length <= 0 || arguments[0] == undefined ? 5 : arguments[0];
	var y =
		arguments.length <= 1 || arguments[1] == undefined ? 10 : arguments[1];
	return console.log(a + b);
};

add();
