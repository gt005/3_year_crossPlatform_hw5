import { ValidationChain, validationResult, body } from 'express-validator';


export const userLoginValidator = (): Array<ValidationChain> => {
    return [
        body('username').isString(),
        body('password').isString()
    ];
};