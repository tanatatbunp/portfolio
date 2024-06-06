//? Function count modulo except duplicate value

let arrInput = [42,84,252,420,840,126,42,84,420,126]
let arrOutput = []
let count = 0

arrInput.forEach(i => {

    let mod = i % 42
    if (arrOutput.includes(mod) == false) {
        arrOutput.push(mod)
        count += 1
    }
}
);

console.log(`Modulo array is ${arrOutput}`);
console.log(count);

//* output = 6