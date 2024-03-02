import { GraphQLString } from "graphql"
import { Users } from "../../entities/users"

export const CREATE_USER = {
    type: GraphQLString,
    args: {
        name: {type: GraphQLString},
        lastname: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString}
    },
    async resolve(_: any, args: any) {
        const {name, lastname, email, password} = args

        const result = await Users.insert({
            name: name,
            lastname: lastname,
            email: email,
            password: password,
        })
        console.log(result)

        return 'user created'
    }
}