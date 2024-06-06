//? Function replace whitespace with dash

function replaceSpace(word) {
    let newWord = word.replace(/\s/g,'-')
    //! /\s/g mean : \s = "match whitespace" and g = flag which mean global

    //? Or can do this
    // let newWord = word.replaceAll(' ','-')

    // console.log(newWord);
}

replaceSpace('Hello World')
replaceSpace('My name is Bob')