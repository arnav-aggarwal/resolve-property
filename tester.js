const tests = require('./tests.js');
require('./index.js');

tests.forEach(({ obj, path }) => {
    console.log(obj, path)
    const prop = Object.extractProperty(obj, path);
    console.log(prop);
});
