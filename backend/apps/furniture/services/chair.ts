import { Chair, IChair } from '../models/Chair';

export const chairCreate = async (chairData: IChair): Promise<IChair> => {
    const chair = new Chair(chairData);
    await chair.save();
    return chair;
}

export const chairUpdate = async (id: string, chairData: IChair): Promise<IChair | null> => {
    const updatedChair = await Chair.findByIdAndUpdate(id, chairData, { new: true });
    return updatedChair;
}

export const chairDelete = async (id: string): Promise<boolean> => {
    const deletedDocument = await Chair.findByIdAndDelete(id);

    if (!deletedDocument) {
        return false;
    }

    return true;
}
