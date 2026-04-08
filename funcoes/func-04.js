function sobraDoSalario(meuSalario){
const contaDeluz = 150.0
const aluguel = 1400.00
const resto = meuSalario - (contaDeluz+aluguel)
return `O que restou no fim do mês ${resto.toFixed(2).replace('.',',')}`

}
const minhasSobras = sobraDoSalario(1700.0)
console.log(sobraDoSalario(5000.0))