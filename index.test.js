test('Object properties are extracted correctly', () => {
    const extractProperty = require('./extract-property');
    const extractPropertyTests = require('./extract-property-tests');

    extractPropertyTests.forEach(({ obj, paths, property }) => {
        const propertiesExtracted = paths.map(thisPath => extractProperty(obj, thisPath).property);

        if(propertiesExtracted.length > 1) {
            let areEqual = true;

            for(let index = 1; index < propertiesExtracted.length; index++) {
                const thisProperty = propertiesExtracted[index];
                const lastProperty = propertiesExtracted[index - 1];

                if(thisProperty !== lastProperty) {
                    areEqual = false;
                    break;
                }
            }

            expect(areEqual).toBe(true);
        }

        expect(propertiesExtracted[0]).toBe(property);
    });
});

test('Object paths are generated correctly', () => {
    const findLongestPath = require('./find-longest-path');
    const findLongestPathTests = require('./find-longest-path-tests');
    
    findLongestPathTests.forEach(({ obj, propertyToFind, path }) => {
        expect(findLongestPath(obj, propertyToFind)).toBe(path)
    });
});

test('All items exported by index.js are correct', () => {
    const findLongestPath = require('./find-longest-path');
    const extractProperty = require('./extract-property');

    const {
        extractProperty: extractProperty_index,
        findLongestPath: findLongestPath_index,
    } = require('./index');

    expect(findLongestPath_index).toBe(findLongestPath);
    expect(extractProperty_index).toBe(extractProperty);
});
