//? Function decrypt 13 alphabet index (a -> n, b -> o)

const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
const beta = ['n','o','p','q','r','s','t','u','v','w','x','y','z']
const fullalphabet = alpha.concat(beta)
        let ans = []
        
        function decrypt(str) { // Ex: input xvo
            let splitStr = str.toLowerCase().split('') // ['x', 'v', 'o']
            // console.log(splitStr);
            for (const s of splitStr) {
        
                //* Code ตรงนี้ เอาไว้ดัก input ที่เข้ามาเป็น whitespace => ให้เมินมันไป
                if (s === ' ') {
                    ans.push(' ');
                    continue;
                }

                let inputIndex = fullalphabet.indexOf(s) //? หาว่าแต่ละตัวอยู่ index ที่เท่าไหร่ใน array alphabet
                let ansIndex = inputIndex
        
                if (ansIndex < 13) {
                    ans.push(beta[ansIndex])
                    
                } else {
                    ans.push(alpha[ansIndex - 13])
                }
                }
                let answer = ans.join('')
                console.log(answer);
                return answer
            }
        
        
        // console.log(decrypt('XVO'))
        decrypt('uryyb VAQVN') // hello india