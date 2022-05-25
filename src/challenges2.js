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

module.exports = {
  techList,
};
