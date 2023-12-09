import { Request, Response, NextFunction } from 'express';
import { chairGetById, chairGetAll } from '../../apps/furniture/selectors/chairs';
import { chairCreate, chairUpdate, chairDelete } from '../../apps/furniture/services/chair';
import { validationResult } from 'express-validator';


export const getChairsByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const chair = await chairGetById(req.params.id);

        if (!chair) {
            return res.status(404).send(`Chair with id=${req.params.id} not found.`);
        }

        res.json(chair);
    } catch (error) {
        next(error);
    }
};


export const getAllChairsController = async (req: Request, res: Response, next: NextFunction) => {
    const chairs = await chairGetAll();

    res.json(chairs);
};


export const createChairController = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const chair = await chairCreate(req.body);

    res.status(201).json(chair);
};


export const updateChairController = async (req: Request, res: Response, next: NextFunction) => {
    const chair = await chairUpdate(req.params.id, req.body);

    if (!chair) {
        return res.status(404).send(`Chair with id=${req.params.id} not found.`);
    }

    res.json(chair);
}


export const deleteChairController = async (req: Request, res: Response, next: NextFunction) => {
    const success = await chairDelete(req.params.id);

    if (!success) {
        return res.status(404).send(`Chair with id=${req.params.id} not found.`);
    }

    res.status(204).send();
}
