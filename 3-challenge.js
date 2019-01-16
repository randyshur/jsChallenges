/*
Using only JS, take an object with various properties.  
Then create a new object that switches the keys and values.
Example:
Input:
originalObject = {
 age: 19,
 name: 'Luke Skywalker',
 eyeColor: 'blue',
 isJedi: true
};
Output:
newObject = {
 19: 'age',
 'Luke Skywalker': 'name',
 blue: 'eyeColor',
 true: 'isJedi'
};
*/

let originalObject = {
    age: 19,
    name: 'Luke Skywalker',
    eyeColor: 'blue',
    isJedi: true
   };

let switchedObject = new Object();

let objKeys = Object.keys(originalObject)
let objValues = Object.values(originalObject)

for (i=0; i < objKeys.length; i++) {  
    switchedObject[objValues[i]]  = objKeys[i];
}
console.log('Original Object: ',originalObject)
console.log('Switched Object: ',switchedObject);