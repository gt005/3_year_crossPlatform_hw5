import mongoose, { Model } from 'mongoose'
import { BaseItemSchema, IBaseItem } from './BaseItem'

export interface IWardrobe extends IBaseItem { };

export const Wardrobe: Model<IWardrobe> = mongoose.model<IWardrobe>('Wardrobe', BaseItemSchema);
