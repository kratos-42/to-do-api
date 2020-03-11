import { BadRequestError, NotFoundError } from 'easy-http-errors';
import ToDoModel from 'to-do/models/to-do-model';

class ToDoManager {

  constructor(Model) {
    this.model = Model;
  }

  async deleteById(id) {
    try {
      await this
        .model
        .query()
        .deleteById(id);
    } catch (error) {
      throw new NotFoundError('To Do does not exist', error);
    }
  }

  async fetchById(id) {
    const toDo = await this
      .model
      .query()
      .findById(id);

    return toDo;
  }

  fetchAll(options) {
    const qb = this.model.getQueryBuilder();
    const { sort = null } = options;

    qb.select('*');

    // TODO: sort by tag.
    // If (sort) {
    //   if (sort.name === 'tag') {
    //     qb.orderBy(options.sort.name);
    //   }
    // }

    return qb;
  }

  async insert(data) {
    try {
      const toDo = await this
        .model
        .query()
        .insertAndFetch(data);

      return toDo;
    } catch (error) {
      throw new BadRequestError('Invalid data', error);
    }
  }

  async patchAndFetchById(id, data) {
    const toDo = await this
      .model
      .query()
      .patchAndFetchById(id, data);

    if (!toDo) {
      throw new NotFoundError('To Do does not exist');
    }

    return toDo;
  }

}

export default new ToDoManager(ToDoModel);
