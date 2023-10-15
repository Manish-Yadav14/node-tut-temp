// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names'); 
const funcn = require('./5-funcn');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
// console.log(data);
// console.log(names);
// console.log(funcn);
funcn('susan');
funcn(names.john);
funcn(names.peter);
addValues(2,3);