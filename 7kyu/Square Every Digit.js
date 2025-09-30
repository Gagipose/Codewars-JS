// https://www.codewars.com/kata/546e2562b03326a88e000020

// get integer number  x
// turn into string then array  x
// map each so it returns them squared  x
// add togeather array items as a string
// turn string into integer Number()


// get integer number
function squareDigits(num){

    // turn into string then array
    const numArray = Array.from(num.toString());

    // map each so it returns them squared
    const squaredArray = numArray.map(num => num**2);

    // add togeather array items as a string
    const resultString = squaredArray.join("");

    // convert string to integer
    const resultInteger = Number(resultString);



    //https://www.w3schools.com/python/ref_string_join.asp

  return resultInteger;
}