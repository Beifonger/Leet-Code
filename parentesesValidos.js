/*
 @param {string} s
 @return {boolean}
 */

const isValid = function (s) {
  const buscar = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (i = 0; i < s.length; i++) {
    console.log(i);

    let teste = s.split("")[i];
    console.log(teste);
    if (teste === "]" || teste === "}" || teste === ")") {
      continue;
    }
    const buscarNoArray = buscar[teste];
    console.log(buscarNoArray);

    for (a = 0; a < teste.length; a++) {
      let valor1 = i + 1;
      let valor2 = s.indexOf(buscarNoArray) + 1;

      let soma = valor1 + valor2;
      console.log(soma);

      let subtrair = valor2 - valor1;
      console.log(subtrair);

      if (soma % 2 === 0) {
        return false;
      }
      if (subtrair === 1) {
        return true;
      }
    }
  }
};

console.log(isValid("())"));
