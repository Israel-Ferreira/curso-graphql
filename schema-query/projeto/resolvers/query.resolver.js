const { usuarios, perfis } = require("../data/db")



module.exports = {
    ola() {
        return "Basta Retornar uma string"
    },

    horaAtual() {
        return `${new Date()}`
    },


    usuario(_, args) {
        const selecionados = usuarios.filter(usuario => usuario.id === args.id)
        return selecionados ? selecionados[0] : null
    },


    usuarios() {
        return usuarios
    },

    produtoEmDestaque() {
        return {
            id: 1,
            nome: "Notebook Dell G15 16 GB AMD Ryzen 7 5800H Geforce RTX 3060",
            preco: 9600.00,
            desconto: 0.5
        }
    },


    perfis() {
        return perfis
    },


    perfil(_, { id }) {
        let profiles = perfis.filter(prfl => prfl.id === id)
        return profiles ? profiles[0] : null
    },

    numerosMegaSena() {
        return Array(6).fill(0)
            .map(_ => parseInt(Math.random() * 60 + 1))
            .sort((a, b) => a - b)
    },

    usuarioLogado() {
        return {
            id: 1,
            nome: "Emily",
            email: "emily@example.com",
            idade: 20,
            vip: true,
            salarioReal: 2500
        }
    }
}