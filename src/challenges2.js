// Desafio 10
function techList(techArr, name) {
  let arr = [];
  let sortArr = techArr.sort();
  for (tech of sortArr) {
    arr.push({
      tech,
      name,
    });
  }
  if (techArr.length === 0) {
    return 'Vazio!';
  }
  return arr;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
