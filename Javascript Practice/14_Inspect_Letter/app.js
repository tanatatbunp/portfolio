//? Function inspect letter

result = []

function checkChar(str) {
    let splitStr = str.split('')


    // console.log(splitStr);
    splitStr.forEach(char => {
        let isUpperCase = (char === char.toUpperCase())
        result.push(isUpperCase)
    });
    // console.log(result);
if (result.includes(false)) {
    if (result.includes(true)) {
        console.log('Mix');
    } else {
        console.log('All Small Letter');
    }
} else {
    console.log('All Capital Letter');
}
result = []

}

checkChar('ABCDEFG') // All capital letter

checkChar('abcdefg') // All small letter

checkChar("This 's a cat") // Mix