import { GraphQLError } from "graphql";
import { Cart } from "../models/cart";

export const cartResolvers = {
    Query: {
        cart: async (_: any, {
            userId
        }: {
            userId: string;
        }) => {
            try {
                const userCart = await Cart.findOne({
                    userId
                });
                if (!userCart) {
                    throw new GraphQLError(`Cart not found for user: ${userId}`);
                }
                return userCart;
            }
            catch (error: any) {
                throw new GraphQLError(`Error in fetching cart: ${error.message}`);
            }
        },
    },
    Mutation: {
        addToCart: async (_: any, { productId, userId, quantity }: {
            productId: string;
            userId: string;
            quantity: number;
        }) => {
            try {
                return await Cart.create({ productId, userId, quantity });
            } catch (error: any) {
                throw new GraphQLError(`Error in adding to cart: ${error.message}`);
            }
        },
        removeFromCart: async (_: any, { productId }: {
            productId: string;
        }) => {
            try {
                return await Cart.findByIdAndDelete(productId);
            } catch (error: any) {
                throw new GraphQLError(`Error in removing from cart: ${error.message}`);
            }
        }
    }
}