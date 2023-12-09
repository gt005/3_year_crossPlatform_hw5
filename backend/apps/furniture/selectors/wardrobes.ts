import { IWardrobe, Wardrobe } from '../models/Wardrobe';

export const wardrobeGetById = async (wardrobeId: string): Promise<IWardrobe | null> => {
    return await Wardrobe.findById(wardrobeId);
}

export const wardrobeGetAll = async (): Promise<Array<IWardrobe>> => {
    return await Wardrobe.find({});
}
