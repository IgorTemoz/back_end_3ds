// Crie um Objeto do tema que escolher
// Crie pelo menos 5 propriedades
// Faça uma impressão para Humanos!
//ex. console.log("Nome do Jogador:" + jogador.nome)

const celulares = {
    nome: "iphone",
    modelo: "Iphone 17 pro max",
    cores : ["laranja", "branco"],
    armazenamento : "1Tb",
    preco : "R$ 12.000,00"
}
celulares.modelo = "celular"
celulares["nome"] = "iphone 17 pro max"
console.log(celulares.modelo)
console.log(celulares.nome)

console.log("Iphone: " + celulares.nome)

