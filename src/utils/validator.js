import { BadRequestError } from 'easy-http-errors';
import Ajv from 'ajv';
import customErrors from 'ajv-errors';

// Ajv options allErrors and jsonPointers are required for custom errors plugin.
const ajv = new Ajv({ allErrors: true, jsonPointers: true });

customErrors(ajv);

export const validateSchema = (schema, data) => {
  const validate = ajv.compile(schema);
  const valid = validate(data);

  if (!valid && validate.errors) {
    throw new BadRequestError(
      'Validation error',
      { properties: validate.errors }
    );
  }
};
