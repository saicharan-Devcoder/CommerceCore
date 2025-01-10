import { GraphQLError } from "graphql";
import { Order } from "../models/order";

export const orderResolvers = {
    Query: {
        order: async () => {
            try{
            return await Order.find();
            }catch(error: any){
                throw new GraphQLError(`Error in fetching order: ${error.message}`);
            }
        },
    },
    Mutation: {
        createOrder: async (_:any, { order }:{
            order:any
        }) => {
            try{
            return await Order.create(order);
            }catch(error: any){
                throw new GraphQLError(`Error in creating order: ${error.message}`);
            }
        },
        updateOrder: async (_:any, { id, order }:{
            id: string;
            order: any;
        }) => {
            try{
            return await Order.findByIdAndUpdate(id, order, { new: true });
            }catch(error: any){
                throw new GraphQLError(`Error in updating order: ${error.message}`);
            }
        },
    }
}