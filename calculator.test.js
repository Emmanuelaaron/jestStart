
const Calculator = require("./calculator")

const myCalc = new Calculator(25, 5)

describe("Calculator", () => {
    test("addition", () => {
        expect(myCalc.add()).toBe(30)
    })
    test("subtraction", () => {
        expect(myCalc.subtract()).toBe(20)
    })
    test("multiplication", () => {
        expect(myCalc.multiply()).toBe(125)
    })
    test("divide", () => {
        expect(myCalc.divide()).toBe(5)
    })
})