// Strip off the first property: obj[abc].def -> [abc].def
function removeFirstProperty(path) {
    const firstDotIndex = path.indexOf('.');
    const firstBracketIndex = path.indexOf('[');
    const indices = [firstDotIndex, firstBracketIndex];
    const sliceIndex = indices.includes(-1) ? Math.max(...indices) : Math.min(...indices);
    return path.slice(sliceIndex);
}

function testPath(path, matches) {
    let shorterPath = removeFirstProperty(path);

    matches.forEach(match => {
        const matchIndex = shorterPath.indexOf(match);
        shorterPath = shorterPath.substring(0, matchIndex) + shorterPath.substring(matchIndex + match.length);
    });

    const propertiesRemaining = shorterPath.match(/[^.'"[\]]+/);
    if (propertiesRemaining) {
        throw new Error(`Invalid object path entered: "${path}" contains an invalid property name.`);
    }
}

function extractPropertyNames(path) {
    const parseMatch = str => str[0].match(/'|"|\[/) ? str.slice(1, -1) : str;
    const matches = path.match(/(?:[a-zA-Z_$](?:[\w$]+)?(?=\[|\.|$))|("|')(?:.+?)[^\\]\1|\[\d+\]|\[('|").\2\]/g)
        .slice(1)
        .map(property => parseMatch(parseMatch(property)));

    testPath(path, matches);
    return matches;
}

function extractProperty(obj, path) {
    const properties = extractPropertyNames(path);
    const failureObj = { property: undefined };
    let currentStage = obj;

    for (let i = 0; i < properties.length; i++) {
        const thisProperty = properties[i];

        if (typeof currentStage !== 'object') {
            failureObj.error = `Attempting to access property "${thisProperty}" on a ${typeof currentStage}: "${currentStage}"`;
            return failureObj;
        }

        if (!currentStage.hasOwnProperty(thisProperty)) {
            const objectProgress = '<root object>.' + properties.slice(0, i).join('.');

            if (Array.isArray(currentStage)) {
                failureObj.error = `Attempting to access nonexistent index ${thisProperty} in array ${objectProgress}`;
                return failureObj;
            }

            failureObj.error = `Attempting to access undeclared property "${thisProperty}" on object ${objectProgress}`;
            return failureObj;
        }

        currentStage = currentStage[thisProperty];
    }

    return { property: currentStage };
}

module.exports = extractProperty;
