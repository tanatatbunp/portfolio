//? Function decrypt password (5 index forward)

// รับ string เข้ามา
// แยกเก็บ string เป็น Array
// วนแต่ละตัวใน Array ออกมาเป็น index
        // เช็คว่าถ้า +5 เกิน 26 ไหม
        // ถ้าไม่เกิน เอาค่า index ใหม่ กลับไปเทียบ alphabet แล้ว push ค่าเก็บไว้
        // ถ้าเกิน เอาค่า index ใหม่ -26 กลับไปเทียบ alphabet แล้ว push ค่าเก็บไว้


const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let ans = []

function decrypt(str) { // Ex: input xvo
    let splitStr = str.split('') // ['x', 'v', 'o']
    // console.log(splitStr);
    for (const s of splitStr) {

        //* Code ตรงนี้ เอาไว้ดัก input ที่เข้ามาเป็น whitespace => ให้เมินมันไป
        if (s === ' ') {
            ans.push(' ');
            continue;
        }

        let inputIndex = alphabet.indexOf(s) //? หาว่าแต่ละตัวอยู่ index ที่เท่าไหร่ใน array alphabet
        let ansIndex = inputIndex + 5

        if (ansIndex < 26) {
            ans.push(alphabet[ansIndex])
            
        } else {
            let correctIndex = ansIndex - 26
            ans.push(alphabet[correctIndex])
        }
        }
        let answer = ans.join('')
        console.log(answer);
        return answer
    }


// console.log(decrypt('XVO'))
decrypt('xvo') // cat
decrypt('ht ivhz dn w') // my name is b