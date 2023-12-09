import { ValidationChain } from 'express-validator';
import { baseItemValidationRules } from '../../validators/commonValidators';


export const wardrobeValidationRules = (): Array<ValidationChain> => {
  const baseRules = baseItemValidationRules();

  return baseRules;
};
