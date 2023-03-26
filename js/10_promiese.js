var promises = new Promise((resolve, reject) => {
	const a = "Pradip";
	const b = "pradip";
	if (a == b) {
		resolve();
	} else {
		reject();
	}
});

promises
	.then(function () {
		console.log("Promises resolved successfully");
	})
	.catch(function () {
		console.log("Promises rejected successfully");
	});
