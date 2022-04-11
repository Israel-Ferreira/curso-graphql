const queryResolver = require('./query.resolver')
const usuarioResolver = require('./usuario.resolver')


module.exports = {
    Usuario: usuarioResolver,
    Query: queryResolver,
}