const leia = require('readline-sync')

console.log("\nCalculadora de Salário Final")

//Entrada

let salario = leia.questionFloat("\nDigite o valor referente ao salario: R$ ")
let abono = leia.questionFloat("\nDigite o valor referente ao abono: R$ ")

let novoSalario = salario + abono 

//Saída
console.log(
    "\nO Salário Atualizado do usuário é: ", 
    new Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL'
    }).format (novoSalario)
);
