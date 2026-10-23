// Merging_Objects_for_Default_Settings_Spread_Operator.md

We can merge the `defaultSettings` directly into the returned object using the spread operator (`...`). It unpacks all the key-value pairs from the default object and assigns them to the new entity.

```javascript
// dod.js

let world = {};

let defaultSettings = {
    shields: 100,
    energy: 100,
    emotion: 'neutral'
};

function makeEntity(name, width, height) {
    return {
        name: name,
        width: width,
        height: height,
        ...defaultSettings
    };
}

world.enterprise = makeEntity('Enterprise', 100, 200);

console.log(world.enterprise);

```

By placing `...defaultSettings` inside the return object, we ensure every new entity starts with those baseline stats. If we ever need to override a default, for example, if a specific ship needs 200 shields instead of 100, we can just pass a custom value after the spread operator, because the last defined property in the object always wins.

If we are working in an environment that requires older ES5 styling and doesn't support the spread operator, we can achieve the exact same result using `Object.assign()`:

```javascript
function makeEntity(name, width, height) {
    let baseEntity = {
        name: name,
        width: width,
        height: height
    };
    
    // Merges defaultSettings and baseEntity into a new empty object
    return Object.assign({}, defaultSettings, baseEntity);
}

```

//----//

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026  
// https://github.com/ChristopherTopalian  
// https://github.com/ChristopherAndrewTopalian  
// https://sites.google.com/view/CollegeOfScripting  
College of Scripting Music & Science

