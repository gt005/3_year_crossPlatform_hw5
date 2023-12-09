import { IChair, Chair } from '../models/Chair';

export const chairGetById = async (chairId: string): Promise<IChair | null> => {
    return await Chair.findById(chairId);
}

export const chairGetAll = async (): Promise<Array<IChair>> => {
    return await Chair.find({});
}
