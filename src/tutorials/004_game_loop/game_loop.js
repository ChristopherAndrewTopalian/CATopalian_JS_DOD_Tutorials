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

