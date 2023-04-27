/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    for (let temp of arr) {
        if (typeof temp === 'number') {
           yield temp;
        } 
        else 
            yield*  inorderTraversal(temp);
       
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
