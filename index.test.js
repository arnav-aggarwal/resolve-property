require('./index');
const testObjects = require('./tests');

test('object properties are extracted correctly', () => {
    testObjects.forEach(({ obj, path, property }) => {
        expect(Object.extractProperty(obj, path)).toBe(property);
    });
});
