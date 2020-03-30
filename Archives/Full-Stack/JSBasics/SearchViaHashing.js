//Question #2: Your input is an array containing
//unsorted words. Suggest an efficient solution
// for implementing hasWord(word) which receives
// a word and returns true if it is in the array
//and false otherwise. You are not allowed to use
//JS Objects (maps) in your solution but can use
//Arrays. Solution time complexity is more
//important then it’s space complexity.

class Dictionary {
	constructor(arr) {
		this.dict = [];
		arr.forEach((word) => {
			const code = this.encode(word);
			this.dict[code] = 1;
		});
	}
	encode(word) {
		return word
			.split("")
			.map((char) => char.charCodeAt(0))
			.join("000");
	}
	hasWord(word) {
		const code = this.encode(word);
		return !!this.dict[code];
	}
}

// A simple but satisfying hashing function for
// a whiteboard test can be achieved by translating
//  each char to its char code, and separating them
//  with a number which is not a char code — this
//  will be done to avoid confusion of char
//  separation. Yes, an efficient hashing, which
//  is done with bit operations is not a requirement to
//   remember and implement, and yes, this is not
//   exactly hashing as well, as the output is not fixed in size. Let’s select ‘000’ as our separator.
