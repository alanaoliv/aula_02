const leia = require('readline-sync')

//Solicitação da entrada das notas
let nota1 = leia.questionFloat("\nDigite a primeira nota: ")
let nota2 = leia.questionFloat("\nDigite a segunda nota: ")
let nota3 = leia.questionFloat("\nDigite a terceira nota: ")
let nota4 = leia.questionFloat("\nDigite a quarta nota: ")

let media = ((nota1 + nota2 + nota3 + nota4) / 4)

console.log(`\nA média final é: ${media .toFixed(1) }`)