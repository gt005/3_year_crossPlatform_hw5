export interface IFurnitureItem {
    _id: string,
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