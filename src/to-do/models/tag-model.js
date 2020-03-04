import { Model } from 'database';
import { timestampPlugin } from 'objection-timestamps';
import guid from 'objection-guid';
import tagModelSchema from 'to-do/schemas/tag-model-schema';

const guidPlugin = guid();
const timeStampPlugin = timestampPlugin({
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

class TagModel extends timeStampPlugin(guidPlugin(Model)) {

  jsonSchema() {
    return tagModelSchema;
  }

  static tableName() {
    return 'to-do';
  }

  // Allow timestamp plugin on this model
  static timestamp() {
    return true;
  }

}

export default TagModel;
