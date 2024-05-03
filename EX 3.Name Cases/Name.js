"use strict";
let personName = '';
personName = prompt('What is your name?') || '';
let lowercase = personName.toLowerCase();
let Uppercase = personName.toUpperCase();
let titlecase = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, Here are your  name in:
    LowerCase: ${lowercase} 
    UpperCase: ${Uppercase}
    TitleCase: ${titlecase}`);
}
else {
    alert('Please fill your name !');
}
