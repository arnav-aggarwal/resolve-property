function hasOneOf(str, testChars) {
  for(let i = 0; i < testChars.length; i++) {
    if(str.includes(testChars[i])) {
      return true;
    }
  }
  
  return false;
}

function extractPropertyNames(path) {
  const brackets = ['[', ']'];
  
  const steps = path.split('.').reduce((accum, item) => {
    if(!hasOneOf(item, brackets)) {
      accum.push(item);
    } else {
      const splitStr = item.split('[');
      const firstProp = splitStr[0];
      const secondProp = splitStr[1].slice(0, -1);
      accum.push(firstProp, secondProp);
    }
    return accum;
  }, []);
  
  steps.shift();
  return steps;
}

function extractProperty(path) {
  const properties = extractPropertyNames(path);
  let currentStage = this;

  for(let i = 0; i < properties.length; i++) {
    const thisProperty = properties[i];
    
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

Object.prototype.extractProperty = extractProperty;

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

const propPath = `obj.a.b.c[0].d.e[1].f`;
const prop = obj.extractProperty(propPath);
console.log(prop);
