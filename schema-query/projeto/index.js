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


type Produto {
    id: ID!
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
}

# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

type Query {
    ola: String!
    horaAtual: Date
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
}
`;

const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salarioReal
        }
    },

    Produto: {
        precoComDesconto(obj) {
            if(obj.desconto) {
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

        produtoEmDestaque(){
            return {
                id: 1,
                nome: "Notebook Dell G15 16 GB AMD Ryzen 7 5800H Geforce RTX 3060",
                preco: 9600.00,
                desconto: 0.5
            }
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


const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`)
})