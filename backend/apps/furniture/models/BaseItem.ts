import { Document, Schema } from 'mongoose';

export interface IBaseItem extends Document {
    size: string;
    material: string;
    color: {
        name: string,
        hexCode: string,
    };
    quantityInStock: number;
    cost: number;
    description?: string;
    image?: string;
}

export const BaseItemSchema: Schema = new Schema({
    size: { type: String, required: true },
    material: { type: String, required: true },
    color: {
        name: { type: String, require: true },
        hexCode: { type: String, require: true },
    },
    quantityInStock: { type: Number, default: 0 },
    cost: { type: Number, required: true },
    description: { type: String, null: true },
    image: { type: String, null: true }
});