import Model from 'database';

class BaseModel extends Model {

  deleteById(id) {
    return this
      .query()
      .deleteById(id);
  }

  fetchById(id) {
    return this
      .query()
      .findById(id);
  }

  fetchAll(options) {
    const { sort, qb = this.getQueryBuilder() } = options;

    if (sort) {
      qb.orderBy(sort.name);
    }

    return qb
      .select('*');
  }

  insert(data) {
    return this
      .query()
      .insertAndFetch(data);
  }

  patchAndFetchById(id, data) {
    return this
      .query()
      .patchAndFetchById(id, data);
  }

}

export default BaseModel;
