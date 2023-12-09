import { ValidationChain, validationResult, body } from 'express-validator';


export const userRegistrationValidator = (): Array<ValidationChain> => {
    return [
        body('username').isString(),
        body('password').isString(),
        body('passwordRepeat').isString()
    ];
};