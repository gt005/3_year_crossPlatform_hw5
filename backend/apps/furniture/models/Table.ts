import mongoose, { Model } from 'mongoose'
import { BaseItemSchema, IBaseItem } from './BaseItem'

export interface ITable extends IBaseItem { };

export const Table: Model<ITable> = mongoose.model<ITable>('Table', BaseItemSchema);