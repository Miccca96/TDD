const cal = require("./Array");

describe("Returned object",()=>{
    test("Undifiend",()=>{
    expect(()=> {cal.objStatistic(15,undefined)}).toThrow('Some element is undfiend');
    })
    test("String element",()=>{
    expect(()=> {cal.objStatistic("bird",0)}).toThrow('Some element is string');
    })
});