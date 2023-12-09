import { Wardrobe, IWardrobe } from '../models/Wardrobe';

export const wardrobeCreate = async (wardrobeData: IWardrobe): Promise<IWardrobe> => {
    const wardrobe = new Wardrobe(wardrobeData);
    await wardrobe.save();
    return wardrobe;
}

export const wardrobeUpdate = async (id: string, wardrobeData: IWardrobe): Promise<IWardrobe | null> => {
    const updatedWardrobe = await Wardrobe.findByIdAndUpdate(id, wardrobeData, { new: true });
    return updatedWardrobe;
}

export const wardrobeDelete = async (id: string): Promise<boolean> => {
    const deletedDocument = await Wardrobe.findByIdAndDelete(id);

    if (!deletedDocument) {
        return false;
    }

    return true;
}
