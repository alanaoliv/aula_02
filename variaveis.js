let nome = "Alana";

let profissao = "Pessoa desenvolvedora";

let salarioBruto = 3500.44;

const bonus = 0.05;

console.log("\nNome: ", nome);
console.log("\nProfissão: ", profissao);

console.log(
    "Salário Líquido: ", 
    new Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL'
    }).format (salarioBruto + (bonus * salarioBruto))
);

console.log("O Salário Bruto do Colaborador " + nome + " é " + salarioBruto);

//interpolação de strings
console.log(`O Salário Bruto do Colaborador ${nome} é ${salarioBruto}`);

// console.log("\nTipo da variável: ", typeof nome)

// nome = 12

// console.log("\nNome: ",nome)

// console.log("\nTipo da variável: ", typeof nome)
