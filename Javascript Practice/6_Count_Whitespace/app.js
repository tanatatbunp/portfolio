//? Function count whitespace

function findSpace(word) {
    let spaceCount = word.split(' ').length -1
    return spaceCount
}

console.log(findSpace('Hello World'));
console.log(findSpace('HMy name is Bob'));
console.log(findSpace('WeStride'));