const { usuarios, perfis } = require("../data/db")



module.exports = {
    usuario(_, args) {
        const selecionados = usuarios.filter(usuario => usuario.id === args.id)
        return selecionados ? selecionados[0] : null
    },


    usuarios() {
        return usuarios
    },


    perfis() {
        return perfis
    },


    perfil(_, { id }) {
        let profiles = perfis.filter(prfl => prfl.id === id)
        return profiles ? profiles[0] : null
    },

}