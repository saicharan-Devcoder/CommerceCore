import mongoose, {Schema, Document} from 'mongoose';

export interface productDocument extends Document {
    name: string;
    price: number;
    description: string;
    countInStock: number;
    imageUrl: string;
    categoryId: string;
}

const productSchema:Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
});

export const Product = mongoose.model<productDocument>('Product', productSchema);