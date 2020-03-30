// Question #1: What will the following code snippet output

function Person(name) {
	this.first_name = name;
}

var a = Person("a");
var b = new Person("b");
var c = Person;

console.log(a); //crash,
console.log(b.first_name); //b
console.log(c.first_name); //undefined

//As for the solution:
// First of all, function definition will be hoisted and it’s possible to define it after the usage (although that isn’t the best practice).
// a will be assigned with undefined, as executing Person as a function returns undefined, therefore logging its name will cause an exception to be thrown: “Cannot read property ‘first_name’ of undefined”.
// b is the right way, to instantiate an object and will print ‘b’ as expected.
// c is just a reference to a function and will return undefined since the function has no first_name value assigned to it.
