const functions = require('./functions').default;

test('add 2 numbers, ex 2+2=4', () => {
    expect(functions.add(2,2)).toBe(4);
});