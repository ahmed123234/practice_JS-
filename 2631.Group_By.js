/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const res = {};

    this.forEach(value => {
        const key = fn(value);
        
        res[key] ||= [];
        res[key].push(value);
    });
    return res;

};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
