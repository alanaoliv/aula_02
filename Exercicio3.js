const leia = require('readline-sync')

console.log("\nCalculadora de Salário Líquido")

//Entrada de dados
let salarioBruto = leia.questionFloat("\nDigite o Salario Bruto: ")
let adicionalNoturno = leia.questionFloat("\nDigite o valor de Adicional Noturno: ")
let horasExtras = leia.questionFloat("\nDigite o valor de Horas Extras: ")
let descontos = leia.questionFloat("\nDigite o valor de Descontos: ")
 
//Calculo
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

console.log(
    "\nO Salário Líquido é: ", 
    new Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL'
    }).format (salarioLiquido)
);