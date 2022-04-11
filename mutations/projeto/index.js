const {ApolloServer} = require('apollo-server')

const {loadSchemaSync} = require('@graphql-tools/load')

const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')

const { makeExecutableSchema } = require('@graphql-tools/schema')


const rslvrs =  require("./resolvers")


const typeDefs = loadSchemaSync("./**/*.graphql", { 
    loaders: [new GraphQLFileLoader()]
})


const schema = makeExecutableSchema({typeDefs, resolvers: rslvrs})

const server = new ApolloServer({ schema })

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})