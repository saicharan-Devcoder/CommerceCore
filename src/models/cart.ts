import mongoose, {Schema, Document} from "mongoose";

export interface cartDocument extends Document{
    user: string;
    cartItems: [
        {
            name: string;
            quantity: number;
            price: number;
            product: string;
        }
    ];
}

const cartSchema:Schema=new Schema({
    user:{
        type: String,
        required: true,
    },
    cartItems:[
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
                type: Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
        },
    ],
});

export const Cart = mongoose.model<cartDocument>("Cart", cartSchema);