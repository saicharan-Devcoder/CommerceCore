import { GraphQLError } from 'graphql';
import { Product } from '../models/product';

export const productResolvers = {
    Query: {
        products: async () => {
            try {
                return await Product.find();
            }
            catch (error: any) {
                throw new GraphQLError(`Error in fetching products: ${error.message}`);
            }
        },
        product: async (_: any, { id }: { id: string }) => {
            const product = await Product.findById(id);
            if (!product) {
                throw new GraphQLError(`Product not found with id: ${id}`);
            }
            return product;
        }
    },
    Mutation: {
        createProduct: async (_: any, { product, context }: {
            product: any,
            context: any
        }) => {
            if (context && context.user && context.user.role !== "ADMIN") {
                throw new GraphQLError("You are not authorized to create a product", {
                    extensions: {
                        code: "UNAUTHORIZED"
                    }
                });
            }

            try {
                return await Product.create(product);
            } catch (error: any) {
                throw new GraphQLError(`Error in creating product: ${error.message}`);
            }
        },
        updateProduct: async (_: any, { id, product, context }: {
            id: string;
            product: any;
            context: any
        }) => {
            if (context && context.user && context.user.role !== "ADMIN") {
                throw new GraphQLError("You are not authorized to update a product", {
                    extensions: {
                        code: "UNAUTHORIZED"
                    }
                });
            }

            try {
                return await Product.findByIdAndUpdate(id, product, { new: true });
            } catch (error: any) {
                throw new GraphQLError(`Error in updating product: ${error.message}`);
            }
        },
        deleteProduct: async (_: any, { id, context }: {
            id: string;
            context: any
        }) => {
            if (context && context.user && context.user.role !== "ADMIN") {
                throw new GraphQLError("You are not authorized to update a product", {
                    extensions: {
                        code: "UNAUTHORIZED"
                    }
                });
            }

            try {
                return await Product.findByIdAndDelete(id);
            }
            catch (error: any) {
                throw new GraphQLError(`Error in deleting product: ${error.message}`);
            }
        }
    }
}
