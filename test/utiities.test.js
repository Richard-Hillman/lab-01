import { sayYesPlease } from '../say-yes-please.js';


const test = QUnit.test;

// ================================================================================

test('sayYesPlease should take in anything starting with y and return true', (expect) => {
    
    //Arrange
    // Set up your arguments and expectations======================================
    
    const yes = 'yaaa';
    
    const expected = true;
    
    
    
     //Act 
    // Call the function you're testing and set the result to a const==============

    const actual = sayYesPlease(yes);
    


 //Expect
    // Make assertions about what is expected versus the actual result==============
    

    expect.equal(actual, expected);
});

// ======================================================================================

test('sayYesPlease should take in anything starting with n and return false', (expect) => {
    
      //Arrange
    // Set up your arguments and expectations=======================================
    
    const no = 'nope';
    
    const expected = false; 
    
    
    
    
    //Act 
    // Call the function you're testing and set the result to a const====================
    
    const actual = sayYesPlease(no);



    //Expect
    // Make assertions about what is expected versus the actual result====================
    
    expect.equal(actual, expected);

 
});
