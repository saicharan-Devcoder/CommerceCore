import { Cart } from "../models/cart";

export const cartResolvers = {
    Query: {
        cart: async () => {
            return await Cart.find();
        },
    },
    Mutation: {
        addToCart: async (_:any, { productId, quantity }:{
            productId: string;
            quantity: number;
        }) => {
            return await Cart.create({productId, quantity});
        },
        removeFromCart: async (_:any, { productId }:{
            productId: string;
        }) => {
            return await Cart.findByIdAndDelete(productId);
        }
    }
}