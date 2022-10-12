function objStatistic(...args){
    var numElements = 0;
    args.forEach(x => isStrUnd(x))
    var obj = {
        numEl : args.length,
        average: args.reduce((a, b) => a + b, 0) / arr.length,
        max: Math.max(...args),
        min: Math.min(...args),
    }
    return obj;
}
function isStrUnd(x){
    if(x === undefined)
    throw new Error("Some element is undfiend");
    if(typeof(x) == "string")
    throw new Error("Some element is string");
}

module.exports = {objStatistic};