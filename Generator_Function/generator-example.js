function* powers(n) {
    // endless loop to generate
    for (let current = n; ; current *= n) {
        yield current;
    }
}

for (const power of powers(2)) {
    // controlling generator
    if (power > 32) {
        break;
    }

    console.log(power);
}
// const power_ = powers(4) 
// const val = power_.next()
// while (val.value) {
//     // controlling generator

//     if (val.value > 32) {
//         break;
//     }

//     console.log(val.value);
//     val = power_.next()
// }