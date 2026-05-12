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
celulares.cores = "laranja, branco"
celulares.armazenamento = "1Tb"
celulares.preco = "R$ 12.000,00"
console.log(celulares.modelo)
console.log(celulares.nome)
console.log(celulares.cores)
console.log(celulares.armazenamento)
console.log(celulares.preco)

console.log("Iphone: " + celulares.nome)

