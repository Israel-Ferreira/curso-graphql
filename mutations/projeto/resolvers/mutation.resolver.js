const {usuarios, proximoId, perfis} = require('../data/db')

module.exports = {
    novoUsuario(_, {nome, email, idade}) {

        const emailIsUsed =  usuarios.some(user => user.email === email)


        if(emailIsUsed) {
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
    
    excluirUsuario(_, {id}){
        const index =  usuarios.findIndex(user => user.id === id)

        if(index === -1){
            throw new Error("Erro: Usuário não encontrado")
        }
        
        const excluido = usuarios.splice(index, 1)
        
        return excluido ? excluido[0] : null
    }
}