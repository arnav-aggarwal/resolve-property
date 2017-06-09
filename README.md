# resolve-property

### extractProperty

`extractProperty` takes in a string that represents the object's path to the property requested and returns an object.
If the property was found, the object looks like { property: 'foo' }.

If not found, the return object looks like

```
{
    property: undefined,
    error: 'descriptive error'
}
```

```
const { extractProperty } = require('resolve-property');

const obj = {
    prop1: {
        arr: [
            {
                arr: []
            }, {
                arr: ['Hello!']
            }
        ]
    },
    prop2: {
        objProp: {
            arr: ['Hi!']
        }
    }
};

const extraction1 = extractProperty(obj, 'obj.prop1.arr[1].arr[0]');
const extraction2 = extractProperty(obj, "obj['prop1'].arr[1].arr[0]");
const extraction3 = extractProperty(obj, `obj['prop1']['arr'][1]['arr'][0]`);

console.log(extraction1); // -> 'Hello'!
console.log(extraction1 === extraction2 === extraction3); // -> true
```

### To Do

- Install eslint
- Add github CI tests
