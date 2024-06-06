//? Function provide prime number

function primeNum(x) {

    for (let i = 1; i < x; i++) {

        //* 0 1 2 3 5 is prime number
        if (i <= 3 || i == 5) {
            console.log(i);
        }

        //* from 4 above
        else if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0) {
            continue
        } else {
            console.log(i);  
        };
        
    }
}

primeNum(30)