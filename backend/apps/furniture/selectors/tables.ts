import { ITable, Table } from '../models/Table';

export const tableGetById = async (tableId: string): Promise<ITable | null> => {
    return await Table.findById(tableId);
}

export const tableGetAll = async (): Promise<Array<ITable>> => {
    return await Table.find({});
}
