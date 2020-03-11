export default {
  additionalProperties: false,
  properties: {
    name: {
      maxLength: 255,
      type: 'string'
    }
  },
  required: ['name'],
  type: 'object'
};
