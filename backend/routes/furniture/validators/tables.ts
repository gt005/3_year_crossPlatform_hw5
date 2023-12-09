import { ValidationChain } from 'express-validator';
import { baseItemValidationRules } from '../../validators/commonValidators';


export const tableValidationRules = (): Array<ValidationChain> => {
  // Сделано так, потому что не хочу считать и работать с этими моделями как с полиморфными
  // (то есть не хочу, чтобы один и тот же валидатор был для каждой модели)
  const baseRules = baseItemValidationRules();

  return baseRules;
};
