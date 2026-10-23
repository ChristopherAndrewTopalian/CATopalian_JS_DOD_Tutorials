# CODE BOOK

---

## Section: 001_foundation

### `dod.js`

```javascript
// dod.js

// create the empty world object
let world = {};

// our function to make entities 
function makeEntity(name, width, height)
{
    return {
        name: name,
        width: width,
        height: height
    };
}

// add object with a key of enterprise to world object
world.enterprise = makeEntity('Enterprise', 100, 200);

console.log(world);

/*
Object { enterprise: {…} }
enterprise: Object { name: "Enterprise", width: 100, height: 200 }
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```

---

### `dod2.js`

```javascript
// dod.js

let world = {};

function makeEntity(name, width, height)
{
    let objectData = {
        name: name,
        width: width,
        height: height
    };

    return objectData;
}

world.enterprise = makeEntity('Enterprise', 100, 200);

console.log(world);

/*
Object { enterprise: {…} }
enterprise: Object { name: "Enterprise", width: 100, height: 200 }
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```

---

## Section: 002_with_default_settings_simple

### `dod_with_default_settings_simple.js`

```javascript
// dod_with_default_settings_simple.js

let world = {};

function makeEntity(name, width, height)
{
    let entityData = {
        name: name,
        width: width,
        height: height,

        // default settings
        shields: 100,
        energy: 100,
        emotion: 'neutral'
    };

    return entityData;
}

world.enterprise = makeEntity('Enterprise', 100, 200);

console.log(world);

/*
Object { enterprise: {…} }
enterprise: Object { name: "Enterprise", width: 100, height: 200, … }
emotion: "neutral"
energy: 100
height: 200
name: "Enterprise"
shields: 100
width: 100
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```

---

## Section: 003_with_default_settings

### `dod_with_default_settings.js`

```javascript
// dod_with_default_settings.js

let world = {};

let defaultSettings = {
    shields: 100,
    energy: 100,
    emotion: 'neutral'
};

function makeEntity(name, width, height)
{
    return {
        name: name,
        width: width,
        height: height,
        ...defaultSettings
    };
}

world.enterprise = makeEntity('Enterprise', 100, 200);

console.log(world);

/*
Object { enterprise: {…} }
enterprise: Object { name: "Enterprise", width: 100, height: 200, … }
emotion: "neutral"
energy: 100
height: 200
name: "Enterprise"
shields: 100
width: 100
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```

---

### `dod_with_default_settings_es5.js`

```javascript
// dod_with_default_settings_es5.js

let world = {};

let defaultSettings = {
    shields: 100,
    energy: 100,
    emotion: 'neutral'
};

function makeEntity(name, width, height)
{
    let baseEntity = {
        name: name,
        width: width,
        height: height
    };
    // Merges defaultSettings and baseEntity into a new empty object
    return Object.assign({}, defaultSettings, baseEntity);
}

world.enterprise = makeEntity('Enterprise', 100, 200);

console.log(world);

/*
Object { enterprise: {…} }
enterprise: Object { shields: 100, energy: 100, emotion: "neutral", … }
emotion: "neutral"
energy: 100
height: 200
name: "Enterprise"
shields: 100
width: 100
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```

---

## Section: 004_game_loop

### `game_loop.js`

```javascript
// dod_with_default_settings_simple.js

// create the empty world object
let world = {};

// make entity object data
function makeEntity(name, width, height)
{
    let entityData = {
        name: name,
        width: width,
        height: height,

        // default settings
        shields: 100,
        energy: 100,
        emotion: 'neutral'
    };

    return entityData;
}

// add the entity to the world object
world.enterprise = makeEntity('Enterprise', 100, 200);

// show what objects are in the world now
console.log(world);

// define the game loop
function gameLoop()
{
    console.log(world.enterprise.shields);

    requestAnimationFrame(gameLoop)
}

gameLoop();

/*
100
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting
```

---
