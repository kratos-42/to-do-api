import { createConnection, Connection } from "typeorm";
import config from 'config';

const connection = async () => {
  const connection = config.get('database.connection');

  return createConnection(connection);
    {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test"
  });
}

export default connection;
