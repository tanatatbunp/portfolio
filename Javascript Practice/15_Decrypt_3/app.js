//? Function decrypt vowel message (c'apa't -> c'a't)

let answer = []
function decrypt(str) {
    let splitStr = str.split('')

    for (let i = 0; i < splitStr.length; i++) {
        if (
        splitStr[i] === 'a' || 
        splitStr[i] === 'e' ||
        splitStr[i] === 'i' ||
        splitStr[i] === 'o' ||
        splitStr[i] === 'u'
        ){
        answer.push(splitStr[i])
        i = i + 2
        } else {
        answer.push(splitStr[i])
        }
    }

    console.log(answer.join(''));
    

    
}


decrypt('zepelepenapa papapripikapa') // zelena paprika

