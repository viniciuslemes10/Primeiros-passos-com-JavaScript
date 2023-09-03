// DECLARANDO FUNÇÕES

function imprimeTexto(texto) {
    if(typeof texto === "string"){
        console.log(texto)
    } else {
        console.log(new Error(`Dados não esperado: ${typeof texto}`))
    }
}

function soma() {
    return 2 + 2;
}

imprimeTexto(soma())