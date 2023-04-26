function* generator() {
   console.log(0);
   console.log(1, yield);
   console.log(2, yield);
   console.log(3, yield);

}


const generator_ = generator();

generator_.next();

generator_.next('pretzel');
generator_.next('california');
generator_.next('palistine');

console.log(generator_.next());