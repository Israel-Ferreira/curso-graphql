const {perfis, proximoPerfilId} = require('../../data/db')


module.exports = {
    adicionarPerfil(_, { dados }) {
        const { nome } = dados
        
        const novoPerfil = {
            id: proximoPerfilId(),
            nome
        }

        perfis.push(novoPerfil)

        return perfis[perfis.length - 1]
    },

    excluirPerfil(_, {filtro}){
        const {id} = filtro

        const index =  id ? perfis.findIndex(perfil => perfil.id == id) : -1

        if (index < 0) {
            throw new Error("Erro: Perfil de Usuário não encontrado")
        }

        const excluido =  perfis.splice(index, 1)

        return excluido ? excluido[0] : null        
    },


    alterarPerfil(_, {filtro, dados}) {
        const {id} = filtro

        const index =  id ? perfis.findIndex(perfil => perfil.id == id) : -1

        if (index < 0) {
            throw new Error("Erro: Perfil de Usuário não encontrado")
        }

        const perfil = perfis[index]

        const {nome} = dados

        perfis.splice(index, 1, {id: perfil.id, nome})

        return perfis[index]
    }



}