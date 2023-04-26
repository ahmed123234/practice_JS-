function* anotheGenerator(index) {
    let i = 0;
    while (i < 3)
        yield index + ++i;

}


function* generator(index) {
    yield index;

    yield* anotheGenerator(index);

    yield index + 10;

}

const generator_ = generator(10);

console.log(generator_.next());
console.log(generator_.next());
console.log(generator_.next());
console.log(generator_.next());
console.log(generator_.next());