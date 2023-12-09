import { check, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { validationResult, body } from 'express-validator';
import { expressjwt } from 'express-jwt';
import { getJwtSecretString } from '../../apps/authorization/services/jwt_token';


export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

export const checkJwt = expressjwt({
    secret: getJwtSecretString(),
    algorithms: ['HS256']
});

export const mongoIdValidator = (): Array<ValidationChain> => {
    return [check('id').isMongoId()];
}

export const baseItemValidationRules = (): Array<ValidationChain> => {
    return [
        body('size').isString(),
        body('material').isString(),
        body('color.name').isString(),
        body('color.hexCode').isString(),
        body('quantityInStock').optional().isInt({ min: 0 }),
        body('cost').isFloat({ min: 0 }),
        body('description').optional().isString(),
        body('image').optional().isString()
    ];
};
