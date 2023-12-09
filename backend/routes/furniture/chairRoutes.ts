import express from 'express';

import {
    getAllChairsController,
    getChairsByIdController,
    createChairController,
    updateChairController,
    deleteChairController
} from '../../controllers/furniture/chairController';

import { chairValidationRules } from './validators/chairs';
import { mongoIdValidator, validate, checkJwt } from '../validators/commonValidators';

const router = express.Router();

router.get('', getAllChairsController);
router.get('/:id', mongoIdValidator(), validate, getChairsByIdController);
router.post('/', checkJwt, chairValidationRules(), validate, createChairController);
router.put('/:id', checkJwt, mongoIdValidator(), chairValidationRules(), validate, updateChairController);
router.delete('/:id', checkJwt, mongoIdValidator(), validate, deleteChairController);

export default router;
