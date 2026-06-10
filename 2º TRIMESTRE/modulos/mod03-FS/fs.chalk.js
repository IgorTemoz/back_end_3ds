// importar PATH e FS
//path possui (join para juntar caminhos e Resolve
//para deduzir subdiretórios e S.O.)
const { error } = require('console')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default

// Salvar o caminho em um variável
//const caminho = path.join(__dirname, 'README.md')//Markdown, text, doc
try {
    const caminho = path.resolve(__dirname, 'READM.md')// Abrir, ler, deletar, editar
    const arquivo = fs.readFileSync(caminho, 'utf-8')
    console.log(chalk.green('Arquivo carregado com sucesso!'))

    console.log(arquivo)
} catch (erro) {
   console.log(chalk.yellow('Falha ao carregar o arquivo. Tente novamente mais tarde'))
   console.log(chalk.red('Erro interno de leitura de arquivo:\n', error.message))
}


