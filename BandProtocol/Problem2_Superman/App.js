// Summary Requirement
// Given n = number of chickens 
// Given k = length of the roof
// Given p = position of the chickens

function maxChickenRescue(n, k, positionArr) {

//----------Check Variable as requirement----------------

    // Check input as requirement (1 <= n,k)
    if (n <= 0 || k <= 0) {
        throw new Error("n and k must be greater than 0");
        //! This will stop the program if not satisfied
}
    // Check input as requirement (n,k <= 1,000,000)
    if (n > 1000000 || k > 1000000) {
        throw new Error("n and k must be less than 1,000,000");
        //! This will stop the program if not satisfied
}   
    // Check input as requirement (1 <= x <= 1,000,000,000)
    if (positionArr.length > 1000000000) {
        throw new Error("Array position must be less than 1,000,000,000");
        //! This will stop the program if not satisfied
}

//-------------Prepare Data------------------

    // Sort positionArr from low to high
    positionArr.sort(function(a, b){
        return a - b
    });      

    //* Open comment to inspect variable result
    // console.log(positionArr);

    let iteration = 0
    let savedChickenArr = []
    let countChicken = 0
    let maxSavedChicken = 0

//-----------Operate Logic--------------------

while (iteration < n) {
    // Reference superman current position
    let supermanPosition = positionArr[iteration]
    // Reference roof length
    let roofLength = supermanPosition + k -1 //? Cover [p, p+k)
    //* Open comment to inspect variable result
    // console.log(`Superman current position : ${supermanPosition} \nRoof will covered to position : ${roofLength}`);
    
    // Count chickens that can be covered by the roof
        positionArr.forEach(element => { // On each chicken in positionArr
            if (element >= supermanPosition && element <= roofLength) {
                countChicken += 1
                //* Open comment to inspect variable result
                // console.log(`Chicken position ${element} saved!`);
            }
        });

    // Update saved chicken count of each iteration in array
    savedChickenArr.push(countChicken)

    //* Open comment to inspect variable result
    // console.log(savedChickenArr);

    // Reset countChicken + Increse iteration
    countChicken = 0
    iteration += 1

    // Chosen maximum savedChicken
     maxSavedChicken = Math.max(...savedChickenArr)

    }

    //Evaluate result
   return(maxSavedChicken);
}


//--------Test Case-------------------

//? function maxChickenRescue (n, k, positionArr)

console.log(maxChickenRescue(5, 5, [2,5,10,12,15]));
// //? Expected Output = 2
// //* Actual Output = 2 OK

console.log(maxChickenRescue(6, 10, [1,11,30,34,35,37]));
// //? Expected Output = 4
// //* Actual Output = 4 OK


//--------Display on HTML-------------------
function handleSubmit() {
    const numChickens = parseInt(document.getElementById('numChickens').value);
    const roofLength = parseInt(document.getElementById('roofLength').value);
    const chickenPositions = document.getElementById('chickenPositions').value.split(',').map(Number);

    try {
        const result = maxChickenRescue(numChickens, roofLength, chickenPositions);
        document.getElementById('result').textContent = `Maximum chickens that can be saved : ${result}`;
    } catch (e) {
        document.getElementById('result').textContent = `Error: ${e.message}`;
    }
}