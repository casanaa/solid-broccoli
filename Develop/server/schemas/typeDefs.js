const typeDefs = `
    type User {
        _id: ID!
        email: String
        username: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: ID!
        title: String!
        description: String
        authors: [String]
        image: String
        link: String
    }

    input BookInput {
        bookId: String!
        title: String!
        description: String!
        authors: [String]
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: BookInput!): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;