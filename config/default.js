module.exports = {
  database: {
    client: 'pg',
    connection: {
      database: 'postgres',
      host: 'localhost',
      password: '1234',
      port: 5432,
      user: 'postgres'
    },
    migrations: {
      tableName: 'migrations'
    }
  },
  server: {
    port: 3000
  }
};
