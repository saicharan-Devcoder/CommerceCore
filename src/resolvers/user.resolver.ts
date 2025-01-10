import { GraphQLError } from "graphql";
import { User } from "../models/user";

export const userResolvers = {
    Query: {
        users: async () => {
            try{
            return await User.find();
            }
            catch(error: any){
                throw new GraphQLError(`Error in fetching users: ${error.message}`);
            }
        },
        user: async (_: any, { id }: { id: string }) => {
            const user = await User.findById(id);
            if (!user) {
                throw new GraphQLError(`User not found with id: ${id}`);
            }
            return user;
        }
    },
    Mutation: {
        createUser: async (_: any, { user }: {
            user: any
        }) => {
            try {
                return await User.create(user);
            } catch (error: any) {
                throw new GraphQLError(`Error in creating user: ${error.message}`);
            }
        },
        updateUser: async (_: any, { id, user }: {
            id: string;
            user: any;
        }) => {
            try {
                return await User.findByIdAndUpdate(id, user, { new: true });
            } catch (error: any) {
                throw new GraphQLError(`Error in updating user: ${error.message}`);
            }
        },
        deleteUser: async (_: any, { id }: {
            id: string;
        }) => {
            try{
            return await User.findByIdAndDelete(id);
            }
            catch(error: any){
                throw new GraphQLError(`Error in deleting user: ${error.message}`);
            }
        }
    }
}