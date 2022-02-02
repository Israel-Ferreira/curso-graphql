module.exports = {
    salario(usuario) {
        return usuario.salarioReal
    },


    perfil(usuario) {
        const profiles = perfis.filter(prf => prf.id === usuario.perfilId)
        return profiles ? profiles[0] : null
    }
}