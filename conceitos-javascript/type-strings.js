const frase1 = "Olá mundo!";
const frase2 = 'Olá mundo!';

const afirmativa = "Vinicius Lemes disse 'oi'";

console.log(afirmativa)

// Para contatenar use o sinal de (+)

const nome = "Vinicius";
const afirmacao = "Meu nome é ";
console.log(afirmacao + nome)

const cifrao = '\u0024';

console.log(cifrao)

const cidade = "Belo Horizonte";
const input = "belo horizonte";

console.log(cidade === input) //false

// Transformando todos os caracteres em letra minuscúla

const inputMinusculo = input.toLowerCase();

console.log(input === inputMinusculo)

// toLowerCase ele converte todos os caracteres strings para letras minusculas.

// A propriedade length, como ela é uma propriedade e não um método ela não utiliza parênteses.
// Ela defini o tamanho da string.

const senha = "uasfhwoaehdowe";
console.log(senha.length);