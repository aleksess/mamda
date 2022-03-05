const  { Just } = require("../types/Just");
const { Nothing } = require("../types/Nothing");

function divide(x, y) {
    if (y === 0) 
        return Nothing('You mustnt divide by 0');
    return Just(x/y);
}

const divideBy2 = (x) => x/2;
const multiply3 = x => x * 3;

console.log(divide(6,0).pipe(multiply3, divideBy2))