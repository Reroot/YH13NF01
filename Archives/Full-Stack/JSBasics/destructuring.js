const person = {
	id: "1",
	name: "Artem",
	print() {
		console.log("hello" + this.name);
	}
};
const printName = (person) => {
	console.log(person.name);
};
console.log(person);
printName(person);

const printNameDesructered = ({ name }) => {
	console.log(name);
};
//fun takes an obj, with a function
printNameDesructered(person);

const { name, id, age } = person;
console.log(name + " " + id + " " + age);

//can also destructre arrays
const hobbies = ["Sports", "Cooking"];
const [h1, h2] = hobbies;
console.log(h1, h2);
