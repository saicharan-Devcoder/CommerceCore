import mongoose, {Schema, Document} from "mongoose";

export interface categoryDocument extends Document{
    name: string;
    description: string;
    imageUrl: string;
}

const categorySchema:Schema=new Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    imageUrl:{
        type: String,
        required: true,
    },
});

export const Category = mongoose.model<categoryDocument>("Category", categorySchema);