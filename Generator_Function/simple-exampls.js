function* idMaker() {
    let index = 0;

    while (true) {
        yield index++;
    }
}

const generator_ = idMaker();

console.log(generator_.next());
console.log(generator_.next());
console.log(generator_.next());
console.log(generator_.next());
console.log(generator_.next());