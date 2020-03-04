export default {
  additionalProperties: false,
  properties: {
    description: { type: 'string' },
    title: {
      maxLength: 255,
      type: 'string'
    }
  },
  required: ['title'],
  type: 'object'
};
