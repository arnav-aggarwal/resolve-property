var obj = {
    a:{
        b:"value",
        c:{
            d:"value2"
        }
    }
};

function findAllPaths(obj, property, startString = '') {
  var pathStrings = [];
  Object.keys(obj).forEach(key => {
    if(typeof obj[key] === 'object') {
      pathStrings.push(...findAllPaths(obj[key], property, startString + key + '.'));
      return;
    }
    
    pathStrings.push(startString + key);
  });
  
  return pathStrings;
}

module.exports = function findLongestPath(obj, property) {
  return findAllPaths(obj, property)
    .filter(str => str.split('').reverse().join('').slice(0, property.length) === property.split('').reverse().join(''))
    .reduce((longest, next) => longest.length >= next.length ? longest : next, '');
}

console.log(findLongestPath(obj, 'd'));
