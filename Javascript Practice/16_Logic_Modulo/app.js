//? Function find modulo of 3 and 11 without using modulo

//* ถ้า A % B = r
//* แล้ว r = A - ((A/B) * B) ; A/B ต้องปัดทศนิยมทิ้ง


function modulo(x) {

    let modulo3 = x - (Math.floor(x/3) * 3)
    let modulo11 = x - (Math.floor(x/11) * 11)

    console.log(modulo3 + " " + modulo11);
    console.log(`True : ${x%3} ${x%11}`);
}

modulo(18) // 0 7
modulo(167) // 2 1
