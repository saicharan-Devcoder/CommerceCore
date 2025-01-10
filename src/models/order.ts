import mongoose, {Schema, Document} from "mongoose";
import { orderStatus } from "../types";

export interface orderDocument extends Document{
    user: string;
    orderItems: [
        {
            name: string;
            quantity: number;
            price: number;
            product: string;
            productId: string;
        }
    ];
    shippingAddress: {
        address: string;
        city: string;
        postalCode: string;
        country: string;
    };
    paymentMethod: string;
    paymentResult: {
        id: string;
        status: string;
        update_time: string;
        email_address: string;
    };
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    status: [orderStatus];
    isPaid: boolean;
    paidAt: Date;
    isDelivered: boolean;
    deliveredAt: Date;
}

const orderSchema:Schema=new Schema({
    user:{
        type: String,
        required: true,
    },
    orderItems:[
        {
            name:{
                type: String,
                required: true,
            },
            quantity:{
                type: Number,
                required: true,
            },
            price:{
                type: Number,
                required: true,
            },
            product:{
                type: String,
                required: true,
            },
            productId:{
                type: String,
                required: true,
            },
        },
    ],
    shippingAddress:{
        address:{
            type: String,
            required: true,
        },
        city:{
            type: String,
            required: true,
        },
        postalCode:{
            type: String,
            required: true,
        },
        country:{
            type: String,
            required: true,
        },
    },
    paymentMethod:{
        type: String,
        required: true,
    },
    paymentResult:{
        id:{
            type: String,
        },
        status:{
            type: String,
        },
        update_time:{
            type: String,
        },
        email_address:{
            type: String,
        },
    },
    taxPrice:{
        type: Number,
        required: true,
        default: 0.0,
    },
    shippingPrice:{
        type: Number,
        required: true,
        default: 0.0,
    },
    totalPrice:{
        type: Number,
        required: true,
        default: 0.0,
    },
    status:{
        type: String,
        required: true,
        default: orderStatus.Pending,
    },
    isPaid:{
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt:{
        type: Date,
    },
    isDelivered:{
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredAt:{
        type: Date,
    },
});

export const Order = mongoose.model<orderDocument>("Order", orderSchema);