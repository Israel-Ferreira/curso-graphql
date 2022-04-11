const queryResolver = require('./query.resolver')
const usuarioResolver = require('./usuario.resolver')
const mutationResolver = require('./mutation.resolver')


module.exports = {
    Usuario: usuarioResolver,
    Query: queryResolver,
    Mutation: mutationResolver
}