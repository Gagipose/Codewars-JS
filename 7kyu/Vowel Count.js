// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// plan b:


// make filter function
// run FIRST array trough filter
// return lenght of NEW array

// make string an array using ... spread
function getCount([...str]) { 
    let vowelsOnly = (letter) => {
        
    }

    return vowelsOnly.length // return lenght of new array
}








//plan a:

// input: string

function getCount(str) {
    let vowelCounter = 0 //make variable vowelCounter
    for (let i = 0; i < str.length; i++) {
        x = str[i]; // current letter (to save space)
        vowelCounter += (
            x === "a" || 
            x === "e" || 
            x === "i" || 
            x === "o" ||
            x === "u"
        ) ? 1 : 0; // if true, add 1
    }

  return vowelCounter;
}

// iterate trough string ->
// if "a or e or i or o or u" -> add +1




//return: nr of (a, e, i, o, u)

