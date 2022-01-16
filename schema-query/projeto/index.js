const {ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

type Query {
    ola: String!
    horaAtual: String
}
`;

const resolvers = {
    Query: {
        ola() {
            return "Basta Retornar uma string"
        },

        horaAtual() {
            return `${new Date()}`
        }
    }
}


const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`)
})