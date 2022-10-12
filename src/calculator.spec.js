const cal = require("./calculator");

describe("Addition group",()=>{
    test("addition of 2 and 3 to equal 5",()=>{
        expect(cal.addCalculator(2,3,4)).toBe(9);
    });
    test("addition",()=>{
        expect(()=> {cal.addCalculator(undefined,0)}).toThrow('At least two parameters should be defined');
    });
    test("addition",()=>{
        expect(()=> {cal.addCalculator("string",0)}).toThrow('All parameters should be numbers');
    });

})

describe("Subtraction group",()=>{
    test("subtraction null",()=>{
        expect(() => {cal.divCalculator(null,3)}).toThrow('All parameters must be defined');
    })
    
    test("sub NaN",()=>{
        expect(() => {cal.divCalculator(NaN,3)}).toThrow('All parameters should be numbers');
    })
    test("subtraction of 5 and 3 to equal 2",()=>{
        expect(cal.subCalculator(5,3)).toBe(2);
    });
})
describe("Multiplication group",()=>{
    test("multiplication of 5 and 3 to be equal 15",()=>{
        expect(cal.mulCalculator(5,3)).toBe(15);
    })
    
    
    test("multiplication",()=>{
        expect(() => {cal.mulCalculator(undefined,3)}).toThrow('All parameters must be defined');
    })
    
    test("multiplication of 5 and 3 to be equal 15",()=>{
        expect(() => {cal.mulCalculator(NaN,3)}).toThrow('All parameters should be numbers');
    })

    test("mul",()=>{
        expect(Number(cal.mulCalculator(0.3,3).toFixed(1))).toBe(0.9);
    })
})

describe("Division group",()=>{
    test("multiplication",()=>{
        expect(() => {cal.divCalculator(undefined,3)}).toThrow('All parameters must be defined');
    })
    
    test("divide NaN",()=>{
        expect(() => {cal.divCalculator(NaN,3)}).toThrow('All parameters should be numbers');
    })
    test("divide with 0",()=>{
        expect(()=> {cal.divCalculator(15,0)}).toThrow('Cant divide with zero');
    })
    test("division of 15 and 3 to be equal 5",()=>{
        expect(cal.divCalculator(15,3)).toBe(5);
    })
})


