import { GraphQLError } from "graphql";
import { Category } from "../models/categories";

export const categoryResolvers = {
    Query: {
        categories: async () => {
            try{
            return await Category.find();
            }catch(error: any){
                throw new GraphQLError(`Error in fetching categories: ${error.message}`);
            }
        },
        category: async (_: any, { id }: { id: string }) => {
            try{
            return await Category.findById(id);
            }catch(error: any){
                throw new GraphQLError(`Error in fetching category: ${error.message}`);
            }
        }
    },
    Mutation: {
        createCategory: async (_:any, { category, context }:{
            category:any
            context: any
        }) => {
            if (context && context.user && context.user.role !== "ADMIN") {
                throw new GraphQLError("You are not authorized to create a product", {
                    extensions: {
                        code: "UNAUTHORIZED"
                    }
                });
            }
            try{
            return await Category.create(category);
            }catch(error: any){
                throw new GraphQLError(`Error in creating category: ${error.message}`);
            }
        },
        updateCategory: async (_:any, { id, category,context }:{
            id: string;
            category: any;
            context: any;
        }) => {
            if (context && context.user && context.user.role !== "ADMIN") {
                throw new GraphQLError("You are not authorized to create a product", {
                    extensions: {
                        code: "UNAUTHORIZED"
                    }
                });
            }
            try{
            return await Category.findByIdAndUpdate(id, category, { new: true });
            }
            catch(error: any){
                throw new GraphQLError(`Error in updating category: ${error.message}`);
            }
        },
        deleteCategory: async (_:any, { id, context}:{
            id: string;
            context: any;
        }) => {
            if (context && context.user && context.user.role !== "ADMIN") {
                throw new GraphQLError("You are not authorized to create a product", {
                    extensions: {
                        code: "UNAUTHORIZED"
                    }
                });
            }
            try{
            return await Category.findByIdAndDelete(id);
            }catch(error: any){
                throw new GraphQLError(`Error in deleting category: ${error.message}`);
            }
        }
    }
}