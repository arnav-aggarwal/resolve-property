test('object properties are extracted correctly', () => {
    const extractProperty = require('./extract-property');
    const extractPropertyTests = require('./extract-property-tests');

    extractPropertyTests.forEach(({ obj, path, property }) => {
        expect(extractProperty(obj, path)).toBe(property);
    });
});

test('object paths are generated correctly', () => {
    const findLongestPath = require('./find-longest-path');
    const findLongestPathTests = require('./find-longest-path-tests');
    
    findLongestPathTests.forEach(({ obj, propertyToFind, path }) => {
        expect(findLongestPath(obj, propertyToFind)).toBe(path)
    });
});

test('all items exported by index.js are correct', () => {
    const findLongestPath = require('./find-longest-path');
    const extractProperty = require('./extract-property');
    
    const {
        extractProperty: extractProperty_index,
        findLongestPath: findLongestPath_index,
    } = require('./index');

    expect(findLongestPath_index).toBe(findLongestPath);
    expect(extractProperty_index).toBe(extractProperty);
});
