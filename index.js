function extractPropertyNames(path) {
  // TODO: Allow escaped quote marks in property names
  // Simpler regex that allows more false positives: /([\w$]+(?=\[|\.|$))|("|')(?:.+?)[^\\]\2|\[\d+\]|\[('|").\3\]/
  // Allows something like obj.8.32
  const parseMatch = str => /'|"|\[/.match(str[0]) ? str.slice(1, -1) : str;
  return path.match(/([a-zA-Z_$](?:[\w$]+)?(?=\[|\.|$))|("|')(?:.+?)[^\\]\2|\[\d+\]|\[('|").\3\]/g)
    .slice(1)
    .map(property => parseMatch(parseMatch(property)));
}

function extractProperty(obj, path) {
  const properties = extractPropertyNames(path);
  let currentStage = obj;

  for(let i = 0; i < properties.length; i++) {
    const thisProperty = properties[i];
    
    if(typeof currentStage !== 'object') {
      throw new Error(`Attempting to access property "${thisProperty}" on a ${typeof currentStage}: "${currentStage}"`);
    }

    if(!currentStage.hasOwnProperty(thisProperty)) {
      const objectProgress = '<root object>.' + properties.slice(0, i).join('.');
      
      if(Array.isArray(currentStage)) {
        throw new Error(`Attempting to access nonexistent index ${thisProperty} in array ${objectProgress}`);
      }
      
      throw new Error(`Attempting to access undeclared property "${thisProperty}" on object ${objectProgress}`);
    }
    
    currentStage = currentStage[thisProperty];
  }
  
  return currentStage;
}

Object.defineProperty(Object, 'extractProperty', {
  configurable: false,
  writable: false,
  value: extractProperty,
});
