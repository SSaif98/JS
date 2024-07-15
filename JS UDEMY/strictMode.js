'use strict';

//Strict mode forbids us to do certain things.
//It creates visible errors in developer console

//Below code will note give any error in console without strict mode on. If the strict mode is on it will
//log an error as in first if statement there is a "s" missing after driver "hasDriverLicense"
let hasDriversLicense = false
const passTest = true

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('You can drive')

//below keywords may be used in future release so it is been reserved by JS and without strict mode it
//will not gives us any error as no such keyword currently exist but it gets exist in future it may cause issue.
//const interface = 45
//const private = 4   