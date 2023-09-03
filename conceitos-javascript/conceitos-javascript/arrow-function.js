// Arrow function
// A arrow function se comporta parecido com expressão de função.

function apresentar(nome) {
    console.log(`Oi, meu nome é ${nome}`)
}

// console.soma(3,4)

const soma = (numero1, numero2) => numero1 + numero2;

// console.log(sum(9, 10))

const sum = (numero1, numero2) => {
    if(numero1 >= 10 || numero2 >= 10) {
        return "Somente números de 1 a 9";
    } else {
        return numero1 + numero2;
    }
}
console.log(sum(9, 10))
