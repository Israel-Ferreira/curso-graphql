const {usuarios, proximoId, perfis} = require('../data/db')

module.exports = {
    novoUsuario(_, {nome, email, idade}) {
        const user = {
            id: proximoId(),
            nome,
            email,
            idade,
            status: "ATIVO"
        }

        usuarios.push(user)

        return user
    }
}