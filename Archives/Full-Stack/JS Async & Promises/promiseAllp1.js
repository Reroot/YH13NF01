import { resolvePlugin } from "@babel/core";

// Write 2 functions, which receive an array of functions as an input, and notify
// using a promise, when they are all complete. Each of the input functions returns a promise and resolves it when done.
// Your first function should execute all the functions in the input array,
//without any importance for their order,
//and the second one should execute each after the previous ended.
function oneAfterTheOther(arr) {
	var promise = new Promise((resolve) => {
		if (arr && arr[0]) {
			let results = [];
			internalExecutor(arr, results, resolve);
		} else {
			resolve();
		}
	});
	return promise;
}
function internalExecutor(subArr, results, resolve) {
	subArr[0]().then((val) => {
		results.push(val);
		if (subArr[1]) {
			internalExecutor(subArr.slice(1, subArr.length), results, resolve);
		} else {
			resolve(results);
		}
	});
}
