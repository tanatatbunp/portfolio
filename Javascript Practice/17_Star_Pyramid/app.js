//? Function create star pyramid from input

let star = []

function starCreator(x) {
    for (let i = 0; i < x; i++) {
        star.push('*')
        console.log(star.join(''));
    }
    star = [] // reset
}

starCreator(5) 

// *
// **
// ***
// ****
// *****
