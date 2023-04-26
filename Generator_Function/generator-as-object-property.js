const someObj = {
   generator : function* () {
        yield "Ahmed";
        yield "Ghannam" 
    },

    *anotheGenerator () {
        yield "amanda";
        yield "hantash" 
    }
}


const generator_ = someObj.generator();
const generator__ = someObj.anotheGenerator();
console.log(generator_.next());
console.log(generator_.next());

console.log(generator__.next());
console.log(generator__.next());