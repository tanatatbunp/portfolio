//? Function create star pyramid from input (reverse)

let star = []

function starCreator(x) {

    for (let i = 0; i < x; i++) {
        star.push(' '); 
    }

    for (let j = 0; j < x; j++) {
        star.shift()
        star.push('*')
        console.log(star.join(''));
        
    }
}
    star = [] // reset


starCreator(10)

//          *
//         **
//        ***
//       ****
//      *****
//     ******
//    *******
//   ********
//  *********
// **********
