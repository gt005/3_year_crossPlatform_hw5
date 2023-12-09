import mongoose, { Model } from 'mongoose'
import { BaseItemSchema, IBaseItem } from './BaseItem'

export interface IChair extends IBaseItem { };

export const Chair: Model<IChair> = mongoose.model<IChair>('Chair', BaseItemSchema);
