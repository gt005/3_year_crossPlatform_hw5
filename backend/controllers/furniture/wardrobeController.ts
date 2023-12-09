import { Request, Response, NextFunction } from 'express';
import { wardrobeGetById, wardrobeGetAll } from '../../apps/furniture/selectors/wardrobes';
import { wardrobeCreate, wardrobeUpdate, wardrobeDelete } from '../../apps/furniture/services/wardrobes';
import { validationResult } from 'express-validator';

export const getWardrobesByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const wardrobe = await wardrobeGetById(req.params.id);

        if (!wardrobe) {
            return res.status(404).send(`Wardrobe with id=${req.params.id} not found.`);
        }

        res.json(wardrobe);
    } catch (error) {
        next(error);
    }
};

export const getAllWardrobesController = async (req: Request, res: Response, next: NextFunction) => {
    const wardrobes = await wardrobeGetAll();

    res.json(wardrobes);
};

export const createWardrobeController = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const wardrobe = await wardrobeCreate(req.body);

    res.status(201).json(wardrobe);
};

export const updateWardrobeController = async (req: Request, res: Response, next: NextFunction) => {
    const wardrobe = await wardrobeUpdate(req.params.id, req.body);

    if (!wardrobe) {
        return res.status(404).send(`Wardrobe with id=${req.params.id} not found.`);
    }

    res.json(wardrobe);
}

export const deleteWardrobeController = async (req: Request, res: Response, next: NextFunction) => {
    const success = await wardrobeDelete(req.params.id);

    if (!success) {
        return res.status(404).send(`Wardrobe with id=${req.params.id} not found.`);
    }

    res.status(204).send();
}
