/* import { ApolloServer, gql } from "apollo-server"

const tweets = [
    {
        id: "1",
        text: "hello",
    },
    {
        id: "2",
        text: "bye",
    }
]


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
        },
        allTweets() {
            return tweets;
        }
    },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => {
    console.log(`Running on ${url}`)
})  */

////////////////

/* import { ApolloServer, gql } from "apollo-server"

const tweets = [
    {
        id: "1",
        text: "hello",
    },
    {
        id: "2",
        text: "bye",
    }
]

const typeDefs = gql`
        type Tweet {
            id: ID!
            text: String!
        }
    type Query { 
        tweet(id: ID!): Tweet
    }
`

const resolvers = {
    Query: {
        tweet(root, { id }) {
            return tweets.find((tweet) => tweet.id === id);
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => {
    console.log(`Running on ${url}`)
}) 
 */

/////////////////////////


/*
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

let tweets = [
    {
        id: "1",
        text: "hello",
    },
    {
        id: "2",
        text: "bye",
    }
]


const resolvers = {
    Query: {
        tweet(root, { id }) {
            return tweets.find((tweet) => tweet.id === id);
        },
        ping() {
            return "pong"
        },
        allTweets() {
            return tweets;
        }
    },
    Mutation: {
        postTweet(root, { text, userId }) {
            const newTweet = {
                id: tweets.length + 1,
                text,
            }
            tweets.push(newTweet)
            return newTweet
        },
        deleteTweet(root, { id }) {
            const tweet = tweets.find((tweet) => tweet.id === id)
            if (!tweet) return false;

            tweets = tweets.filter(tweet => tweet.id !== id)
            return true;
        }
    },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => {
    console.log(`Running on ${url}`)
})  
*/

////////////////////

/* 
import { ApolloServer, gql } from "apollo-server"

const typeDefs = gql`
        type User {
            id: ID!
            firstName: String!
            lastName: String
            fullName: String!
        }
        type Tweet {
            id: ID!
            text: String!
            author: User!
        }
    type Query { 
        tweet(id: ID!): Tweet
        allTweets: [Tweet!]!
        allUsers: [User!]!
    }
    type Mutation {
        postTweet(text: String!, userId: ID!): Tweet!
        deleteTweet(id: ID!): Boolean!
    }
`

let tweets = [
    {
        id: "1",
        text: "hello",
    },
    {
        id: "2",
        text: "bye",
    }
]


let users = [
    {
        id: "1",
        firstName: "nico",
        lastName: "las"
    }
]

const resolvers = {
    Query: {
        tweet(root, { id }) {
            return tweets.find((tweet) => tweet.id === id);
        },
        allTweets() {
            return tweets;
        },
        allUsers() {
            return users
        }
    },
    Mutation: {
        postTweet(root, { text, userId }) {
            const newTweet = {
                id: tweets.length + 1,
                text,
            }
            tweets.push(newTweet)
            return newTweet
        },
        deleteTweet(root, { id }) {
            const tweet = tweets.find((tweet) => tweet.id === id)
            if (!tweet) return false;

            tweets = tweets.filter(tweet => tweet.id !== id)
            return true;
        }
    },
    User: {
        fullName() {
            return "hello"
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => {
    console.log(`Running on ${url}`)
}) 
 */

////////////////////////

/* 
import { ApolloServer, gql } from "apollo-server"

const typeDefs = gql`
        type User {
            id: ID!
            firstName: String!
            lastName: String
            fullName: String!,
        }
    type Query { 
        allUsers: [User!]!
    }
`

let users = [
    {
        id: "1",
        firstName: "nico",
        lastName: "las",
    }
]

const resolvers = {
    Query: {
        allUsers() {
            return users
        }
    },
    User: {
        fullName(root) {
            console.log(root) // { id: '1', firstName: 'nico', lastName: 'las' }
            return `${root.firstName} ${root.lastName}`
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => {
    console.log(`Running on ${url}`)
}) */

///////////////////////



import { ApolloServer, gql } from "apollo-server"

const typeDefs = gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String
        fullName: String!
    }
    type Tweet {
        timeline: ID!
        text: String!
        author: User!
    }
type Query { 
    tweet(id: ID!): Tweet
    allTweets: [Tweet!]!
    allUsers: [User!]!
}
`

let tweets = [
    {
        timeline: "1",
        text: "hello",
        userId: "nico1234"
    },
    {
        timeline: "2",
        text: "bye",
        userId: "elon1234"
    }
]


let users = [
    {
        id: "nico1234",
        firstName: "nico",
        lastName: "las",
    },
    {
        id: "elon1234",
        firstName: "Elon",
        lastName: "Musk"
    }
]


const resolvers = {
    Query: {
        allUsers() {
            return users
        },
        allTweets() {
            return tweets;
        },
    },
    User: {
        fullName({ firstName, lastName }) {
            return `${firstName} ${lastName}`
        }
    },
    Tweet: {
        author({userId}) {
            return users.find(user => user.id === userId)
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => {
    console.log(`Running on ${url}`)
})