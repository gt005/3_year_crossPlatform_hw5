import express from 'express';

import { 
    getAllWardrobesController,
    getWardrobesByIdController,
    createWardrobeController,
    updateWardrobeController,
    deleteWardrobeController
} from '../../controllers/furniture/wardrobeController';

import { wardrobeValidationRules } from './validators/wardrobes';
import { mongoIdValidator, validate, checkJwt } from '../validators/commonValidators';


const router = express.Router();

router.get('', getAllWardrobesController);
router.get('/:id', mongoIdValidator(), validate, getWardrobesByIdController);
router.post('/', checkJwt, wardrobeValidationRules(), validate, createWardrobeController);
router.put('/:id', checkJwt, mongoIdValidator(), wardrobeValidationRules(), validate, updateWardrobeController);
router.delete('/:id', checkJwt, mongoIdValidator(), validate, deleteWardrobeController);


export default router;
