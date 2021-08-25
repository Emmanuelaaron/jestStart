const reverseString = require('./revsersString')

test('should return reverse of a string', () =>{
    expect(reverseString("boy")).toBe("yob")
})