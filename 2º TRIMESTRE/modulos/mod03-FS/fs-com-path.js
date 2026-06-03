// importar PATH e FS
//path possui (join para juntar caminhos e Resolve
//para deduzir subdiretórios e S.O.)
const fs = require('fs')
const path = require('path')

// Salvar o caminho em um variável
//const caminho = path.join(__dirname, 'README.md')//Markdown, text, doc
try {
    const caminho = path.resolve(__dirname, 'README.md')// Abrir, ler, deletar, editar
    const arquivo = fs.readFileSync(caminho, 'utf-8')

    console.log(arquivo)
} catch (erro) {
    //console.log(erro)
    console.log('_______________________')
    console.warn("Atenção!" +erro.path)
    throw new Error('Ocorreu um erro inesperado!');

    console.log('__________________________')
}


