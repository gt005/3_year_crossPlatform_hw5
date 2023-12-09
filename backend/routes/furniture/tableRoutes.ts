import express from 'express';

import { 
    getAllTablesController, 
    createTableController, 
    getTablesByIdController, 
    updateTableController, 
    deleteTableController 
} from '../../controllers/furniture/tableController';

import { tableValidationRules } from './validators/tables';
import { mongoIdValidator, validate, checkJwt } from '../validators/commonValidators';

const router = express.Router();

router.get('', getAllTablesController);
router.get('/:id', mongoIdValidator(), validate, getTablesByIdController);
router.post('/', checkJwt, tableValidationRules(), validate, createTableController);
router.put('/:id', checkJwt, mongoIdValidator(), tableValidationRules(), validate, updateTableController);
router.delete('/:id', checkJwt, mongoIdValidator(), validate, deleteTableController);

export default router;
