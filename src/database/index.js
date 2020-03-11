import { Model } from 'objection';
import knex from 'database/knex';
import models from 'database/models';

// Register `knex` instance to `objection` Model.
Model.knex(knex);

const databaseInitialize = async () => {
  try {
    for (const model of models) { // eslint-disable-line
      // Drop tables.
      await knex.schema.dropTableIfExists(model.tableName());
    }

    // Drop migrations.
    await knex.schema.dropTableIfExists('migrations');
    await knex.schema.dropTableIfExists('migrations_lock');

    // Run migrations.
    await knex.migrate.latest({ tableName: 'migrations' });
  } catch (error) {
    console.log('error', error);
  }
};

export {
  Model,
  databaseInitialize
};
