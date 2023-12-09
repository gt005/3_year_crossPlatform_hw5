import { Request, Response, NextFunction } from 'express';
import { tableGetById, tableGetAll } from '../../apps/furniture/selectors/tables';
import { tableCreate, tableUpdate, tableDelete } from '../../apps/furniture/services/tables';
import { validationResult } from 'express-validator';


export const getTablesByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const table = await tableGetById(req.params.id);

        if (!table) {
            return res.status(404).send(`Table with id=${req.params.id} not found.`);
        }

        res.json(table);
    } catch (error) {
        next(error);
    }
};


export const getAllTablesController = async (req: Request, res: Response, next: NextFunction) => {
    const tables = await tableGetAll();

    res.json(tables);
};


export const createTableController = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const table = await tableCreate(req.body);

    res.status(201).json(table);
};

export const updateTableController = async (req: Request, res: Response, next: NextFunction) => {
    const table = await tableUpdate(req.params.id, req.body);

    if (!table) {
        return res.status(404).send(`Table with id=${req.params.id} not found.`);
    }

    res.json(table);
}

export const deleteTableController = async (req: Request, res: Response, next: NextFunction) => {
    const success = await tableDelete(req.params.id);

    if (!success) {
        return res.status(404).send(`Table with id=${req.params.id} not found.`);
    }

    res.status(204).send();
}
