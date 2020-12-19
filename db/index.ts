import { GraphQLClient } from "graphql-request"

console.log("CONNECTING TO FAUNA " + process.env.FAUNA_SECRET)
const graphQLClient = new GraphQLClient("https://graphql.fauna.com/graphql", {
  headers: {
    authorization: "Bearer " + process.env.FAUNA_SECRET,
  },
})

export default graphQLClient
