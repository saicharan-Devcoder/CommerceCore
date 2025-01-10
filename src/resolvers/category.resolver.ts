import { Category } from "../models/categories";

export const categoryResolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
        category: async (_: any, { id }: { id: string }) => {
            return await Category.findById(id);
        }
    },
    Mutation: {
        createCategory: async (_:any, { category }:{
            category:any
        }) => {
            return await Category.create(category);
        },
        updateCategory: async (_:any, { id, category }:{
            id: string;
            category: any;
        }) => {
            return await Category.findByIdAndUpdate(id, category, { new: true });
        },
        deleteCategory: async (_:any, { id }:{
            id: string;
        }) => {
            return await Category.findByIdAndDelete(id);
        }
    }
}