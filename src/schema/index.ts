import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { GREETING } from './queries/greeting'

const rootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        greeting: GREETING
    }
})

export const schema = new GraphQLSchema({
    query: rootQuery,
})