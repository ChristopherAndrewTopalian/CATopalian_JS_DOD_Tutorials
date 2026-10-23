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

