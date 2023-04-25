/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
     
    return x => functions.reduceRight((acc,f)=>f(acc),x)

	/*	OR
	 *	let val;
	 *
    		return function(x) {
        		if (val == undefined) {val = x}

        		while (functions.length > 0) {
            			let f = functions.pop();
            			if (f) {
                			val =  f(val);
            			}
        		}
        		return val;
    		}
	 *
	 * */

};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
