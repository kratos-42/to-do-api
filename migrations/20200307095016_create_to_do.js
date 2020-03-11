exports.up = function(knex) {
  return knex.schema
    .createTable('to-do', table => {
      table.timestamp('createdAt').notNullable();
      table.text('description', 255);
      table.uuid('id').primary();
      table.string('title', 255).notNullable();
      table.timestamp('updatedAt').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('to-do');
};
