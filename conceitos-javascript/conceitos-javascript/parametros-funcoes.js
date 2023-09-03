// function soma(...dados){
//     let resultado = 0;
//     for(let i = 0; i < dados.length; i++) {
//         const arrayAtual = dados[i];

//         if(Array.isArray(arrayAtual)) {
//             for(let x = 0; x < arrayAtual.length; x++) {
//                 resultado += arrayAtual[x];
//             }
//         } else {
//             return NaN;
//         }
//         return resultado;
//     }
// }

// const numeros = [3, 5, 6, 6];

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}

console.log(multiplicacao(soma(3, 5), soma(7, 8)))