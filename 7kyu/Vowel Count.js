// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript


function getCount(str) {
    
}









// input: string

function getCount(str) {
    let vowelCounter = 0 //make variable vowelCounter
    for (let i = 0; i < str.length; i++) {
        x = str[i]; // current letter (to save space)
        vowelCounter += (x === "a" || x === "e") ? 1 : 0; // paused, perhaps found better way
    }

  return vowelCounter;
}

// iterate trough string ->
// if "a or e or i or o or u" -> add +1




//return: nr of (a, e, i, o, u)

