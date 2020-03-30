//obj
let users = {
	Jet: "tophat",
	Sam: "Fan",
	Deas: "Cane"
};
//or obj class, like in java
class User {
	constructor(race, skills, age) {
		this.race = race;
		this.skills = skills;
		this.age = age;
	}
}
const firstUser = new User("white", "skateboarding", "24");
//print obj
//console.log(firstUser);
console.log(users);

//obj as a promise
const myPromise = new Promise(function(resolve, reject) {});
console.log(myPromise);

const myPromise2 = new Promise(function(resolve, reject) {
	resolve("p2");
});
console.log(myPromise2);
//promise has nothing so it's in a pending state
//now a forced resolve
// const myPromise2 = new Promise(function(resolve, reject) {
//     resolve(10);
//  });
// console.log(myPromise2);
// In addition, we can pass anything we’d like to into resolve and reject.
// For example, we could pass an object instead of a string:
const click = true;
//or we can white with a return = new Promise...etc
const p3 = new Promise((resolve, reject) => {
	if (click) {
		const resolvedClick = {
			Jet: "tophat",
			Sam: "Fan",
			Deas: "Cane"
		};
		resolve(resolvedClick.Sam);
	} else {
		const errClick = {
			msg: "error"
		};
		reject("you"); //thow an error with the text
	}
});

console.log(p3);
// A promise is simply an object that we create
// like the later example. We instantiate it with
// the new keyword. Instead of the three parameters we passed in to
//make our car (color, type, and doors), we pass in a function
//that takes two arguments: resolve and reject.
// Ultimately, promises tell us something about the completion of the asynchronous function we returned it from–if it worked or didn’t. We say the function was successful by saying the promise resolved, and unsuccessful by saying the promise rejected.
