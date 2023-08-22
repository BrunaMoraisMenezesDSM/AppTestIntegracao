const contas = require('./contas'); 

test("Soma 2 + 5, esperado 7 como resultado", () => { //nome do teste que será feito
    expect(contas.soma(2, 5)).toBe(7); //espera-se que o resultado da função recebendo os parametros 2 e 5, seja 7. toBe -> que seja, é uma comparação, existem outras.
}); // função do jest

test("Substração 5 - 2, esperado 7 como resultado", () => {
    expect(contas.subtracao(5, 2)).toBe(3);
  });
  
  test("Multiplicação 2 * 5, esperado 7 como resultado", () => {
    expect(contas.multiplicacao(2, 5)).toBe(10);
  });
  
  test("Divisão 50 / 2, esperado 7 como resultado", () => {
    expect(contas.divisao(50, 2)).toBe(25);
  });
  