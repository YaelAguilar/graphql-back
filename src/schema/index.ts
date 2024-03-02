import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { GREETING } from './queries/greeting'
import { CREATE_USER } from './mutations/user';
import { GET_USER, GET_ALL_USERS } from './queries/User';

const rootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        greeting: GREETING,
        getUser: GET_USER,
        getAllUsers:GET_ALL_USERS,
    },
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