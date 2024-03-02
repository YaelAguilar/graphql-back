import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { GREETING } from './queries/greeting'
import { CREATE_USER } from './mutations/user';

const rootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        greeting: GREETING,
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: CREATE_USER,
    },
});

export const schema = new GraphQLSchema({
    query: rootQuery,
    mutation: Mutation
});