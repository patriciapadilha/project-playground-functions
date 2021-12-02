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
function highestCount(numbersArray) {
  let repetition = 0
  let highestNumber = Math.max(...numbersArray);
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] === highestNumber) { 
      repetition++;
    }
  }
  return repetition;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  if(Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return ("cat1");
  } else if(Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
    return ("cat2");
  } else {
    let message = "os gatos trombam e o rato foge";
    return (message);
  }  
}


// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  
  for(let index = 0; index < array.length; index += 1){
    if(array[index] % 3 == 0 && array[index] % 5 == 0) {
      newArray.push("fizzBuzz");
    } else if(array[index] % 3 == 0) {
      newArray.push("fizz");
    } else if(array[index] % 5 == 0) {
      newArray.push("buzz");
    } else {
      newArray.push("bug!");
    }
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  let stringA = string.replace(/a/g , "1");
  let stringE = stringA.replace(/e/g , "2");
  let stringI = stringE.replace(/i/g , "3");
  let stringO = stringI.replace(/o/g , "4");
  let stringU = stringO.replace(/u/g , "5");
  return stringU;
}

function decode(string) {
  let stringA = string.replace(/1/g , "a");
  let stringE = stringA.replace(/2/g , "e");
  let stringI = stringE.replace(/3/g , "i");
  let stringO = stringI.replace(/4/g, "o");
  let stringU = stringO.replace(/5/g, "u");
  return stringU;
}
//(//g para expressão usada regularmente)
//segundo parametro entre aspas.



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
