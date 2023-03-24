function logActivity(name = "Younz", activity = "skiing") {
	console.log(`${name} love ${activity}`);
}

logActivity();

var defaultPerson = {
	name: {
		first: "John",
		last: "Doe",
	},
	favActivity: "learning",
};

function logDefaultPerson(p = defaultPerson) {
	console.log(`${p.name.first} love ${p.favActivity}`);
}

logDefaultPerson();
