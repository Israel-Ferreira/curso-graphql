const {usuarios} = require('../../data/db')


module.exports = {
    usuario(_, args) {
        const selecionados = usuarios.filter(usuario => usuario.id === args.id)
        return selecionados ? selecionados[0] : null
    },


    usuarios() {
        return usuarios
    },
}
