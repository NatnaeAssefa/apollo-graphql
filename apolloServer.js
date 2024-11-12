const { ApolloServer, gql } = require('apollo-server');

// Sample data
const users = [
  { id: '1', name: 'Alice', email: 'alice@example.com', age: 28 },
  { id: '2', name: 'Bob', email: 'bob@example.com', age: 35 }
];

// GraphQL schema
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }
`;

// Resolvers
const resolvers = {
  Query: {
    users: () => users,
    user: (parent, args) => users.find(user => user.id === args.id),
  },
};

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
