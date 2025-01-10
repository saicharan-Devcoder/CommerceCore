import { Product } from '../models/product';

export const productResolvers = {
    Query: {
        products: async () => {
            return await Product.find();
        },
        product: async (_: any, { id }: { id: string }) => {
            return await Product.findById(id);
        }
    },
    Mutation: {
        createProduct: async (_:any, { product }:{
            product:any
        }) => {
            return await Product.create(product);
        },
        updateProduct: async (_:any, { id, product }:{
            id: string;
            product: any;
        }) => {
            return await Product.findByIdAndUpdate(id, product, { new: true });
        },
        deleteProduct: async (_:any, { id }:{
            id: string;
        }) => {
            return await Product.findByIdAndDelete(id);
        }
    }
}
