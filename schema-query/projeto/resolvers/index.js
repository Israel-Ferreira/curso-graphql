const produtoResolver = require("./produto.resolver")
const queryResolver = require('./query.resolver')
const usuarioResolver = require('./usuario.resolver')



module.exports = {
    Produto: produtoResolver,
    Usuario: usuarioResolver,
    Query: queryResolver,
}