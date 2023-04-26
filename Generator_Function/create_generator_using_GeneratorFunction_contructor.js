const GeneratorFunction = function* () {}.constructor;


const foo = new GeneratorFunction(
    `
        yield 'a';
        yield 'b';
        yield 'c';
    `
);

let str = '';
for (const val of foo()) {
    str += val;
}

console.log(str);

// pass parameter to the GeneratorFunction 
const gen = new GeneratorFunction("index", `

    while (index > 0) {
        yield index-- * 10;
    }

`);

// const gen_ = gen(2);
// console.log(gen_.next());
// console.log(gen_.next());

for (let val of gen(10)) {
    console.log(val);
}
