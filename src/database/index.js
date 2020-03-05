import { createConnection, Connection } from "typeorm";
import config from 'config';

const connection = async () => {
  const
  return createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test"
  });
}
