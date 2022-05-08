const { usuarios, proximoId, perfis } = require('../data/db')

const indiceUsuario = filtro => {
    if (!filtro) return -1

    const { id, email } = filtro
    let index = -1;

    if (id) {
        index = usuarios.findIndex(user => user.id === id)
    } else if (email) {
        index = usuarios.findIndex(user => user.email == email)
    }

    return index
}

module.exports = {
    novoUsuario(_, { dados }) {

        const { nome, idade, email } = dados

        const emailIsUsed = usuarios.some(user => user.email === email)


        if (emailIsUsed) {
            throw new Error("E-mail já existente")
        }

        const user = {
            id: proximoId(),
            nome,
            email,
            idade,
            status: "ATIVO"
        }

        usuarios.push(user)

        return user
    },


    excluirUsuario(_, { filtro }) {
        const index = indiceUsuario(filtro)

        if (index === -1) {
            throw new Error("Erro: Usuário não encontrado")
        }

        const excluido = usuarios.splice(index, 1)

        return excluido ? excluido[0] : null
    },

    alterarUsuario(_, {filtro, dados}) {
    
        const index = indiceUsuario(filtro)

        if (index < 0) {
            throw new Error("Erro: Usuário não encontrado")
        }

        const user = {
            ...usuarios[index],
            ...dados
        }

        usuarios.splice(index, 1, user)

        return user
    }
}