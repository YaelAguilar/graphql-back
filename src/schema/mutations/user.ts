import { GraphQLString } from "graphql"
import { Users } from "../../entities/users"
import { UserType } from "../typeDefs/User"
import bcrypt from 'bcryptjs'

export const CREATE_USER = {
    type: UserType,
    args: {
        name: {type: GraphQLString},
        lastname: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString}
    },
    async resolve(_: any, args: any) {
        const {name, lastname, email, password} = args

        const encryptsPassword = await bcrypt.hash(password, 10)

        const result = await Users.insert({
            name: name,
            lastname: lastname,
            email: email,
            password: encryptsPassword,
        })
        console.log(result)

        return {...args, id: result.identifiers[0].id, password: encryptsPassword}
    }
}