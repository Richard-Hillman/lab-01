// import functions and grab DOM elements

import { sayYesPlease } from './say-yes-please.js';

// 1. what elements do we need 
        // content
        // button
        // span div 


// IDS to BUTTON and RESULTS PRELAUNCH SEQUENCE========================================================== 

const button = document.getElementById('launchpad');
const results = document.getElementById('results');
const byeBye = document.getElementById('byeBye');
const mainContent = document.getElementById('mainContent');
const satelite = document.getElementById('satelite');



button.addEventListener('click', () => {
    // what is the users name
    const spaceCadet = prompt('What\'s your last name pilot?');

    // confirm launch
    const astronautGo = confirm('Ready for launch?');

    if (!astronautGo) {
        alert('Launch cancelled');
        return;
    }

    
    // LAUNCH SEQUENCE LIST===============================================================================================
    // CHECKLIST NUMBER 1--------------------------------------------------------------------------------------------------------
    
    let correcto = 0;
    
    const launchDate = prompt(`Alright Space Cadet ${spaceCadet}, is the 1969 JULY 16 the correct date of launch for astronaut Hillman, Aldrin and Collins launch?`);
    
    if (sayYesPlease(launchDate)) {
        
        correcto++;
    }
    
    // CHCKLIST NUMBER 2----------------------------------------------------------------------------------------------------------
    
    const firstMooner = prompt(`${spaceCadet}, was Hillman really the first person to step foot on the moon?`);
    
    if (sayYesPlease(firstMooner)) {
        
        correcto++;
    }
    
    // CHECKLIST NUMBER 3---------------------------------------------------------------------------------------------------------
    
    const orbits = prompt(`${spaceCadet}, the Apollo 11 orbited eleven times around the earth before slingshotting to the moon, true or false?`);

    if (sayYesPlease(orbits)) {
        
        correcto++;
    }
    
    results.textContent = `Hey ${spaceCadet} you're going to the moon! ${correcto} right out of 3.`;

    // BLASTOFF!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    if (correcto >= 2) {
        byeBye.style.display = 'block';
        mainContent.style.display = 'none';
        satelite.style.display = 'block';
    }

});

// document.getElementById('satelite').addEventListener('click', () => {
//     console.log('itworked');
// }

// satelite.addEventListener('click', window.location.reload);