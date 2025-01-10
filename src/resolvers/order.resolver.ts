import { Order } from "../models/order";

export const orderResolvers = {
    Query: {
        order: async () => {
            return await Order.find();
        },
    },
    Mutation: {
        createOrder: async (_:any, { order }:{
            order:any
        }) => {
            return await Order.create(order);
        },
        updateOrder: async (_:any, { id, order }:{
            id: string;
            order: any;
        }) => {
            return await Order.findByIdAndUpdate(id, order, { new: true });
        },
    }
}