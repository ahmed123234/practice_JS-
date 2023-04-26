class Demo {
    *[Symbol.iterator]() {
        console.log("fullname is: ");
        yield "Ahmed";
        yield "Ghannam"
    }

    static generator = function*() {
        yield 1;

    }
}


const generator_ = Demo.generator();

console.log(generator_.next());

console.log(Array.from(new Demo()));


const myObj = {
    *[Symbol.iterator]() {
        yield "Fares";
        yield "Adban",
        yield {name: "Ali", age: 30, major: "CSE"}
    }
}

console.log(Array.from(myObj));


/**
 * 
 * Generator are not constructable
 * 
 * The followng example will throw type error (f is not a constructor)
 * 
 */
function* f() {

}

try {
    const obj = new f();
} catch(err) {
    console.log(err.message);
}


// Generator defined in an expression 

const gen = function* () {
    yield 10;
}

const gen_ = gen(); 
console.log(gen_.next());
console.log(gen_.next());