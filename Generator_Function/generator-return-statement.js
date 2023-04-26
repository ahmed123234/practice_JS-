function* generator() {
    yield "Ahmad" 
    return "Ghannam"
    yield "Unreachable"

}

 
const generator_ = generator();

console.log(generator_.next('california'));
 
console.log(generator_.next());

console.log(generator_.next());