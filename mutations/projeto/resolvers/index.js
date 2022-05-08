const queryResolver = require('./queries')
const usuarioResolver = require('./usuario.resolver')
const mutationResolver = require('./mutations')


module.exports = {
    Usuario: usuarioResolver,
    Query: queryResolver,
    Mutation: mutationResolver
}