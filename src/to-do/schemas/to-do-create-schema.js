export default {
  additionalProperties: false,
  properties: {
    description: {
      type: ['null', 'string']
    },
    title: {
      maxLength: 255,
      type: 'string'
    }
  },
  required: ['title']
};
