//callback is within, fun will call back
const fetchData = (callback) => {
	setTimeout(() => {
		callback("done");
	}, 1000);
};

setTimeout(() => {
	fetchData((text) => {
		console.log(text);
	});
}, 2000);

//passing a timer wothin a timer

//instead of doing this we can do promises as callback stacks can get messey

//callback is within, fun will call back

//sync
const fetchDataProm = () => {
	const promise = new Promise((res, rej) => {
		setTimeout(() => {
			res("done");
		}, 1000);
	});
	return promise;
};

setTimeout(() => {
	fetchDataProm()
		.then((text) => {
			console.log(text);
		})
		.then(() => {
			// this will execute before since there's not time limit on it
			console.log("chained function test");
		});
}, 1000);
