function findAllPaths(obj, property, stringArr = []) {
    const allPaths = [];

    Object.keys(obj).forEach(key => {
        if(key === property) {
            allPaths.push([...stringArr, key]);
        }

        if (typeof obj[key] === 'object') {
            allPaths.push(...findAllPaths(obj[key], property, [...stringArr, key]));
        }
    });

    return allPaths;
}

function findLongestPath(obj, property) {
    const allPaths = findAllPaths(obj, property);

    if (allPaths.length === 0) {
        return [];
    };

    if (allPaths.length === 1) {
        return allPaths[0];
    }

    return allPaths.filter(path => path[path.length - 1] === property)
        .reduce((longest, next) => next.length > longest.length ? next : longest, '');
}

module.exports = findLongestPath;
