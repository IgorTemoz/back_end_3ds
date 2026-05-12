let health = 100

function danoJogador(arma, dano){
    if(health <=0){
        console.log("jogador está morto!")
    } else{
        const danoTotal = health - dano
        return `
        ${arma} causa dano de ${dano} -> ${danoTotal}`
    }
}
module.exports = {
    danoJogador
}