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
function encode(string) {
  let stringA = string.replace(/"a"/g , 1);
  let stringE = stringA.replace(/"e"/g , 2);
  let stringI = stringE.replace(/"i"/g , 3);
  let stringO = stringI.replace(/"o"/g , 4);
  let stringU = stringO.replace(/"u"/g , 5);
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

// 9 - Crie uma função que Codifique e Decodifique
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:


// Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".

// A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").

// O que será verificado:

// Retorne uma string codificada quando a função encode for utilizada

// Retorne uma string decodificada quando a função decode for utilizada

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
