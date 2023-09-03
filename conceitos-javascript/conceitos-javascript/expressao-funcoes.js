// A principal diferença de uma expressão de função e uma declaração de função é
// o HOSTING que está presente na expressão da função, o que isso quer dizer?
// que na expressão de função você só pode exibir no console se você ja estiver 
// inicializado, vamos para o exemplo.

// Vamos exibir a exprssão da função antes de inicializar ela gerando um erro.
console.log(soma(7, 9))
const soma = function(numero1, numero2){ return nnumero1 + numero2;}

// Agora vamos mostrar a declaração para ver a diferença.
console.log(somaDeclaracao(7, 9))
function somaDeclaracao(numero1, numero2) {
    return numero1 + numero2;
}

// Vimos que na declaração não exibe erro.