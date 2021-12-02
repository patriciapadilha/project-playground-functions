// Desafio 1
function compareTrue(p1, p2) {
  if(p1 === true && p2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let newString = string.split(' ');
  
  for(let index = 0; index < newString.length; index += 1){
    array.push(newString[index]);
  }
  return array;
}


// Desafio 4
function concatName(arrayDeStrings) {
  let result = arrayDeStrings[arrayDeStrings.length - 1] + ", " + arrayDeStrings[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let sunWins = wins * 3;
  let totalSum = sunWins + ties;
  return totalSum;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
