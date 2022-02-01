const { ApolloServer, gql } = require('apollo-server')


const { loadTypedefsSync, loadSchemaSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')

const { join } = require('path')
const { makeExecutableSchema } = require('@graphql-tools/schema')


const usuarios = [
    { id: 1, nome: "Israel Souza", email: "israel@example.com", salario: 4000, idade: 22, perfilId: 1 },
    { id: 2, nome: "Matheus Faria", email: "matheusf@example.com", salario: 5000, idade: 25, perfilId: 2 },
    { id: 3, nome: "Gileade Trindade", email: "gileadet@example.com", salario: 6500, idade: 30, perfilId: 1 }
]


const perfis = [
    { id: 1, nome: "Comum" },
    { id: 2, nome: "Administrador" }
]

const typeDefs = loadSchemaSync("./**/*.graphql", { 
    loaders: [new GraphQLFileLoader()]
})

const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salarioReal
        },


        perfil(usuario) {
            const profiles = perfis.filter(prf => prf.id === usuario.perfilId)
            return profiles ? profiles[0] : null
        }



    },

    Produto: {
        precoComDesconto(obj) {
            if (obj.desconto) {
                return obj.preco - (obj.preco * obj.desconto)
            }

            return obj.preco
        }
    },

    Query: {
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
}



const schema = makeExecutableSchema({typeDefs, resolvers})




const server = new ApolloServer({ schema })

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})