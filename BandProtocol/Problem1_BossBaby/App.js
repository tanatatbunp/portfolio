// Summary Requirement

    //? 1. Don't revenge first (index 0 != R)
    // hist[0] !== 'R'
        
    //? 2. Make sure revenge must be last index
    // hist[hist.length - 1] !== 'S'

    //? 3. Count of R must > Count of S
    // countS > countR

//* If satisfied >>> "Good boy"
//! If not satisfied >>> "Bad boy"

//-------------------------------

function warResult(str) {

//----------Check Variable as requirement----------------

// Check input as requirement (1 <= len(s) <= 1,000,000)
        if (str.length > 1000000) {
            throw new Error("Input too long (Maximum 1,000,000)");
            //! This will stop the program if not satisfied
        }

//----------Prepare Data----------------

// Convert to UpperCase
        str = str.toUpperCase();

// Variable Declaration
        let hist = []
        let countS = 0
        let countR = 0

//------------Create function--------------
    for (let i = 0; i < str.length; i++) {

        // Count S and R
        if (str[i] == 'S') {
            countS += 1
        } else
        if (str[i] == 'R') {
            countR += 1
        } else {
            throw new Error("Invalid Input (Must be only 'S' and 'R')");
            //! This will stop the program if not satisfied
        }
        // Update hist array
        hist.push(str[i])
    }
        //* Open comment to inspect variable result
        // console.log(`Count Shot = ${countS}`);
        // console.log(`Count Revenge = ${countR}`);
        // console.log(hist);

        //? Requirement execute here
        //? Req1  \/            Req2  \/                          Req3  \/
        //?       \/                  \/                                \/
        if (hist[0] !== 'R' &&  hist[hist.length - 1] === 'R' && countR > countS) {
        return('Good boy');
        } else {
        return('Bad boy');
        }
}
//--------Test Case-------------------

const longInput = 'S'.repeat(1000001); // For test

//! Call function to test result (Output = Error)
// warResult(longInput); //* OK
// const errCase1 = warResult('SRSSFRRRSRR') //* OK

//? Positive Case (Output = Good boy)
console.log(warResult('SRSSRRRSRR')); //* OK
console.log(warResult('SSRSRRR')); //* OK
console.log(warResult('SsrSrRr')); //* OK

//? Negative Case (Output = Bad boy)
console.log(warResult('RSSRR')); //* OK
console.log(warResult('SSSRRRRS')); //* OK
console.log(warResult('SRRSSR')); //* OK
console.log(warResult('rSRRsrSRsr')); //* OK


//--------Display on HTML-------------------

function handleSubmit() {
    const inputString = document.getElementById('inputString').value;

    try {
        const result = warResult(inputString);
        document.getElementById('result').textContent = result;
    } catch (e) {
        document.getElementById('result').textContent = `Error: ${e.message}`;
    }
}

