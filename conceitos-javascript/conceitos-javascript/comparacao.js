const numero = 5;
const texto = "5";

// == -> comparação implicita, indica que compara apenas os valores
// atribuidos a variável.
console.log(numero == texto)

// === -> comparacão explicita, indica que compara tanto os valores atribuidos as
// variaveis quantos aos tipos de cada uma.
console.log(numero === texto)

console.log(numero === Number(texto))