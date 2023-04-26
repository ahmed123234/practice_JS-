/** 
 * 
 * generators are functions that can be exited and later re-enterd.
 * Their context(variable buildings) will be saved across re-entrances
 * 
 * yield --> will pause the generator execution 
 * (i.e. the generator function's body will be executed until the first yield expression)
 * which specifis the value to be returned from the iterator
 * 
 * 
 * yield* --> delegates to another generator function 
 * 
 * */ 

function* generator(index) {
    yield index;
    yield index + 10;
}

const generator_ = generator(10);

// while(!generator_.next().done) {
    console.log(generator_.next().value);
// }

console.log(generator_.next().value);