class Foo {
    // expression function 
    generator = function* () {
         yield "Ahmed"; 
         yield "Ghannam" 
     };
 
     // complete function 
     *anotheGenerator () { 
         yield "amanda";
         yield "hantash" 
     };
 }
 
 const foo = new Foo();
 const generator_ = foo.generator();
 const generator__ = foo.anotheGenerator();
 console.log(generator_.next());
 console.log(generator_.next());
 
 console.log(generator__.next());
 console.log(generator__.next());