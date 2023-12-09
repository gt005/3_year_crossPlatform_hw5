import { userLoginValidator } from './validators/userLogin';
import { userRegistrationValidator } from './validators/userRegistration'
import express from "express";
import { loginUserController, registerUserController } from '../../controllers/authorization/authController';
import { validate } from '../validators/commonValidators';

const router = express.Router();

router.post('/sign-in', userLoginValidator(), validate, loginUserController);
router.post('/sign-up', userRegistrationValidator(), validate, registerUserController);

export default router;
