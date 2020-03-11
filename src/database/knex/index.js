import config from 'config';
import knex from 'knex';

const {
  client,
  connection,
  migrations
} = config.get('database');

export default knex({
  client,
  connection,
  migrations
});
