Array.prototype.last = function() {
    const last = this.pop(); 
    return  last!= undefined? last: -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
