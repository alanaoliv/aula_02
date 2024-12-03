const leia = require('readline-sync')

console.log("\nCalculo de Diferença")

//Entrada 
let n1 = leia.questionFloat("\nDigite o primeiro numero: ")
let n2 = leia.questionFloat("\nDigite o segundo numero: ")
let n3 = leia.questionFloat("\nDigite o terceiro numero: ")
let n4 = leia.questionFloat("\nDigite o quarto numero: ")

//Calculo
let calculo = (n1 * n2)-(n3 * n4)

//Saída
console.log(`\nA Diferença é: ${calculo .toFixed(1)}`)