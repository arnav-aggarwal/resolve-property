const obj = {
    a:{
        b:"value",
        c:{
            d:"value2"
        }
    }
};

function findAllPaths(obj, property, startString = '') {
  const pathStrings = [];
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if(typeof value === 'object') {
      pathStrings.push(...findAllPaths(value, property, startString + key + '.'));
      return;
    }
    
    pathStrings.push(startString + key);
  });
  
  return pathStrings;
}

function reverseStr(str) {
  return str.split('').reverse().join('');
}

function findLongestPath(obj, property) {
  return findAllPaths(obj, property)
    .filter(str => str.split('').reverse().join('').slice(0, property.length) === property.split('').reverse().join(''))
    .reduce((longest, next) => longest.length >= next.length ? longest : next, '');
}

console.log(findLongestPath(obj, 'd'));

module.exports = findLongestPath;
