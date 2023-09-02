//Var a var não é mais utilizada pois ela pode causar muitos bugs no código devido ela ser 
//muito solta.

// var forma = "quadrado";
// var altura = 5;
// var comprimento = 7;

// if(forma === "quadrado") {
//     area = altura * comprimento
// } else {
//     area = (altura * comprimento) / 2; 
// }
//console.log(area)
//var area;

// Let quando declaramos uma variavel let ela pode ser modificada porém ela deve ser declara antes.

// let forma = "triângulo";
// let altura = 5;
// let comprimento = 7;
// let area;

// if(forma === "triângulo") {
//     area = (altura * comprimento) / 2;
// } else {
//     area = altura * comprimento
// }

// console.log(area)


// Const quando declaramos uma variavel constante ela não pode ser modificada.
const forma = "triângulo";
const altura = 6;
const comprimento = 25;
let area;

if(forma === "quadrado") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}
console.log(area)