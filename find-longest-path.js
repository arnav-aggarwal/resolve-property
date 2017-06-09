function findAllPaths(obj, property, startString = '') {
    const pathStrings = [];
    Object.keys(obj).forEach(key => {
        if(key === property) {
            pathStrings.push(startString + key);
        }

        if (typeof obj[key] === 'object') {
            pathStrings.push(...findAllPaths(obj[key], property, startString + key + '.'));
        }
    });

    return pathStrings;
}

function countDots(str) {
    const match = str.match(/\./g);
    return match && match.length || 0;
}

function findLongestPath(obj, property) {
    return findAllPaths(obj, property)
        .filter(str => str.endsWith(property))
        .reduce((longest, next) => countDots(next) > countDots(longest) ? next : longest, '');
}

module.exports = findLongestPath;
