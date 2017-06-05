function extractPropertyNames(path) {
  const brackets = ['[', ']'];
  
  const steps = path
    .replace(/('|")/g, '')
    .split('.')
    .reduce((accum, item) => {
      if(item.includes('[')) {
        const [_, a, __, b] = item.match(/(\w+(?=\[))\[("|'?)(\w+)\2\]/);
        accum.push(a, b);
      } else {
        accum.push(item);
      }

      return accum;
    }, []);
    
  steps.shift();
  return steps;
}

function extractProperty(obj, path) {
  const properties = extractPropertyNames(path);
  let currentStage = obj;

  for(let i = 0; i < properties.length; i++) {
    const thisProperty = properties[i];
    
    if(typeof currentStage !== 'object') {
      throw new Error(`Attempting to access property ${thisProperty} on a ${typeof currentStage}: "${currentStage}"`);
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

const obj = {
  a: {
    b: {
      c: [
        {
          d: {
            e: [
              '_',
              {
                f: 'Hello!',
              },
            ],
          },
        },
      ],
    },
  },
};

const propPath = `obj.a.b.c['0'].d.e[1].f`;
const prop = Object.extractProperty(obj, propPath);
console.log(prop);
