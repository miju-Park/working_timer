export const defaults = {
  restTimes: []
};
export const typeDefs = [
  `
  schema {
    query:Query
    mutation:Mutation
  }
  type Query {
    restTimes :[RTime]!
    restTime(id:Int!): RTime
  }
  type Mutation{
    insertRestTime(date:Date!, time:Int!)
    editRestTime(id:String!, time:Int!)
  }
  type RTime {
    id: Int!
    time: Int!
    date: Date!
  }
  `
];
export const resolvers = {
  Query: {
    restTimes: () => []
  }
};
