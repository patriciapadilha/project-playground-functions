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
  if(cat1 < cat2){
    return ("cat1");
  } else if(cat2 < cat1){
    return ("cat2");
  } else if(cat2 === cat1){
    let message = "os gatos trombam e o rato foge";
    return (message);
  }  
}
// 7 - Crie uma função de Caça ao Rato
// Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão caçando um mesmo rato chamado mouse. Imagine que os animais estão em uma reta, cada um em uma posição representada por um número.

// Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).

// Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua função deverá retornar "cat2".

// Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".

// O que será verificado:

// Retorne a string 'cat2' caso a função catAndMouse receba os parâmetros onde gato cat2 esteja a 2 unidades de distância do rato e cat1 esteja a 3 unidades de distância do rato

// Retorne a string 'cat1' caso a função catAndMouse receba os parâmetros onde gato cat1 esteja a 6 unidades de distância do rato e cat2 esteja a 12 unidades de distância do rato

// Retorne a string 'os gatos trombam e o rato foge' caso a função catAndMouse receba os parâmetros onde os gatos estejam na mesma distância do rato

//falta o ultimo teste.

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
