import { Table, ITable } from '../models/Table';


export const tableCreate = async (tableData: ITable): Promise<ITable> => {
    const table = new Table(tableData);
    await table.save();
    return table;
}


export const tableUpdate = async (id: string, tableData: ITable): Promise<ITable | null> => {
    const updatedTable = await Table.findByIdAndUpdate(id, tableData, { new: true });
    return updatedTable;
}


export const tableDelete = async (id: string): Promise<boolean> => {
    const deletedDocument = await Table.findByIdAndDelete(id);

    if (!deletedDocument) {
        return false;
    }

    return true;
}

