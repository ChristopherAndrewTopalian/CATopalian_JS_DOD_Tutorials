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

