// Crie um array que contenha 3 frutas
// Adicione 4 frutas com o metodo .push(<nomeFruta>)
// remova 1 fruta com .pop()
// verifique, se todas as frutas foram removidas
// imprima "Nunhuma fruta encontrada"

const frutas = ['jaca', 'manga','maracujá']
console.log(frutas)
frutas.push('pêssego')
frutas.push('banana')
frutas.push('uva')
frutas.push('amorinha')
console.log(frutas)
frutas.pop(frutas)
console.log(frutas)
console.log(frutas.length)
while (frutas.length > 0) {
        frutas.pop()    
        if (frutas.length ==0) {
            console.log("Não há frutas para vender!!!")

        }
}

console.log(frutas)
console.log(frutas.length)