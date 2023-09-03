const nome = "Vinicius";
const idade = 2023 - 2003;
const cidadeDeNascimento = "Extrema-MG";

const apresentacao = "Meu nome é " + nome + ", tenho " + idade +
 " anos e nasci em " + cidadeDeNascimento;
console.log(apresentacao) 

const apresentacaoTemplate = `Meu nome é ${nome}, tenho ${idade} anos e nassci em ${cidadeDeNascimento}.`;
console.log(apresentacaoTemplate)