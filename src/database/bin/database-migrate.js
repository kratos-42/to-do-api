import knex from 'database/knex';

(async () => {
  // Run migrations.
  await knex.migrate.latest({ tableName: 'migrations' });
})();
