import { ValidationChain } from 'express-validator';
import { baseItemValidationRules } from '../../validators/commonValidators';


export const chairValidationRules = (): Array<ValidationChain> => {
  const baseRules = baseItemValidationRules();

  return baseRules;
};
