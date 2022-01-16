const {ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`

scalar Date 

type Usuario {
    id: ID!
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
}

# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

type Query {
    ola: String!
    horaAtual: Date
    usuarioLogado: Usuario
}
`;

const resolvers = {
    Query: {
        ola() {
            return "Basta Retornar uma string"
        },

        horaAtual() {
            return `${new Date()}`
        },

        usuarioLogado() {
            return {
                id: 1,
                nome: "Emily",
                email: "emily@example.com",
                idade: 20,
                vip: true,
                salario: 2500
            }
        }
    }
}


const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`)
})