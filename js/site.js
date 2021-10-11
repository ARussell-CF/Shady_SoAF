//get starting values from the screen
//Controller Function
function getValues() {
    //Get the user input K value - needs to be a number
    let kValue = "17"; //You need to write the code to get the user input, I am hard coding 17

    //Convert the input to a number
    kValue = Number.parseInt(kValue);

    //Make sure I got a number
    if (!isNaN(kValue)) {
        //Search the array
        let result = checkArray(kValue); //At minimum this returns true or false

        //Return/print the output
        displayData(result);

    } else {
        alert("Number array needs numbers!");
    }

}

function checkArrayA(kValue) {
    //I have a hard coded array - no user input
    const sumArray = [10, 15, 3, 7];

    //Create an output variable
    let output = false;

    //Forward searching - 2 for loops
    for (let i = 0; i <= sumArray.length - 2; i++) {
        for (let j = i + 1; j <= sumArray.length - 1; j++) {
            let outerValue = sumArray[i];
            let innerValue = sumArray[j];

            if (outerValue + innerValue == kValue) {
                output = true;
                return output;
            }
        }
    }

    return output;
}

function checkArrayB(kValue) {
    //Array functions - indexOf() - returns the position of a value in an array or -1
    //indexOf() needs what it is searching for and where to start
    //I have a hard coded array - no user input
    const sumArray = [10, 15, 3, 7];

    //Create an output variable
    let output = false;

    for (let i = 0; i <= sumArray.length - 2; i++) {
        let checkValue = kValue - sumArray[i];
        if (sumArray.indexOf(checkValue, i) >= 0) {
            output = true;
            return output;
        }
    }

    return output;

}

function displayData(result) {
    let output = document.getElementById("result");

    if (result) {
        output.innerText = "Your K value was found!"
    } else {
        output.innerText = "Your K value was not found!"
    }
}