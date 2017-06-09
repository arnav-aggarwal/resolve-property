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
