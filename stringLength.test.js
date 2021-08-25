const stringLength = require('./stringLength')

test('returns the length of a string', () =>{
    expect(stringLength("Code")).toBe(4);
    expect(() => stringLength("")).toThrow("string should not exceed 10 characters or should not be empty")
})