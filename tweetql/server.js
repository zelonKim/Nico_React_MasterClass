import { ApolloServer, gql } from "apollo-server"

const typeDefs = gql`
        type User {
            id: ID!
            username: String!
        }
        type Tweet {
            id: ID!
            text: String!
            author: User!
        }
    type Query { 
        allTweets: [Tweet!]!
        tweet(id: ID!): Tweet
        ping: String!
    }
    type Mutation {
        postTweet(text: String!, userId: ID!): Tweet!
        deleteTweet(id: ID!): Boolean!
    }
`

const resolvers = {
    Query: {
        tweet() {
                console.log("I`m called")
            return null;
        },
        ping() {
            return "pong"
        }
    },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => {
    console.log(`Running on ${url}`)
}) 



