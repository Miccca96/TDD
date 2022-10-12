function addCalculator(a,b,...args){
    if(a === undefined || a ===null || b === undefined || b === null)
    throw new Error("At least two parameters should be defined");
    if(isNaN(a) || isNaN(b) || isNaN(...args))
    throw new Error("All parameters should be numbers");
    var sum = a + b;
    for(let i = 0;i<args.length;i++ ){
        sum = sum + args[i];
    }
    return sum;
}
function subCalculator(a,b){
    if(a === undefined || a ===null || b === undefined || b === null)
    throw new Error("All parameters must be defined");
    if(isNaN(a) || isNaN(b))
    throw new Error("All parameters should be numbers");
    return a-b;
}
function mulCalculator(a,b){
    if(a === undefined || a ===null || b === undefined || b === null)
    throw new Error("All parameters must be defined");
    if(isNaN(a) || isNaN(b))
    throw new Error("All parameters should be numbers");
    return a*b;
}
function divCalculator(a,b){
    if(a === undefined || a ===null || b === undefined || b === null)
    throw new Error("All parameters must be defined");
    if(isNaN(a) || isNaN(b))
    throw new Error("All parameters should be numbers");
    if(b === 0){
        throw new Error("Cant divide with zero");
    }
    return a/b;
}

module.exports = {addCalculator,subCalculator,divCalculator,mulCalculator};

