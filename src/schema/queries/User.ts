import { GraphQLList } from "graphql";
import { Users } from "../../entities/users";
import { UserType } from "../typeDefs/User";

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    async resolve() {
        return await Users.find()
    }
}