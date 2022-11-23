import React from 'react'

function CamelCase(name) {
    let splitted = name.split('');
    let firstLetter = splitted[0].toUpperCase();
    splitted.shift();
    splitted.unshift(firstLetter);
    let lettersJoined = splitted.join('')
    return(lettersJoined);  
}

export default CamelCase