const { gql } = require('apollo-server-express');

const typeDefs = gql`
# category is day of the week? or type of event (artists talk, exhibit/muesum opening, etc.)
  type Category {
    _id: ID
    name: String
  }

  type Event {
    _id: ID
    name: String!
    description: String
    locationName: String!
    locationAddress: String!
    # time: String!
    date: String!
    imageLink: String
    link: String
    # type: String
    category: Category
  }

  type List {
    _id: ID
    savedDate: String
    events: [Event]
  }

  type User {
    _id: ID
    username: String
    email: String
    lists: [List]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    events: [Event]
    event(_id: ID!): Event
    user: User
    list(_id: ID!): List
    # we don't need checkout with money but this is our saved events?
    checkout(events: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addList(events: [ID]!): List
    updateUser(username: String!, email: String!, password: String!): Auth
    # could be used for removing event (originally for changing quantity of product)
    deleteEvent(_id: ID!, quantity: Int!): Event
    # updateList(_id: ID!): Event
    login(email: String!, password: String!): Auth
    # not sure what this should be but it will be related to adding an event with the event form?
    addEvent(name: String!): Event
  }
`;

module.exports = typeDefs;