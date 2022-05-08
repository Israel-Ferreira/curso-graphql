const {perfis} = require('../../data/db')

module.exports = {
    perfis() {
        return perfis
    },


    perfil(_, { id }) {
        let profiles = perfis.filter(prfl => prfl.id === id)
        return profiles ? profiles[0] : null
    },
}

