/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {


    if (object === null) {
        return object;
    }
    if (typeof object === 'string') {

        return `"${object}"`;

    } else if (Array.isArray(object)) {

        const items = object.map(val => `${jsonStringify(val)}`);
        return `[${items.join(',')}]`;

    } else if (typeof object === 'object') {

        let keys = Object.keys(object);

        const items = keys.map(key => `"${key}":${jsonStringify(object[key])}`);

        return `{${items.join(',')}}`;
        
    }   else {

        return object;
    }
};
