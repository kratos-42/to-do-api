import { Model } from 'database';
import { timestampPlugin } from 'objection-timestamps';
import TagModel from 'to-do/models/tag-model';
import guid from 'objection-guid';
import toDoModelSchema from 'to-do/schemas/to-do-model-schema';

const guidPlugin = guid();
const timeStampPlugin = timestampPlugin({
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

class ToDoModel extends timeStampPlugin(guidPlugin(Model)) {

  jsonSchema() {
    return toDoModelSchema;
  }

  static relationMappings() {
    return {
      tags: {
        join: {
          from: 'to-do.id',
          to: 'tags'
        },
        modelClass: TagModel,
        relation: Model.HasManyRelation
      }
    };
  }

  static tableName() {
    return 'to-do';
  }

  // Allow timestamp plugin on this model
  static timestamp() {
    return true;
  }

}

export default ToDoModel;
