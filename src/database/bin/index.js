import { databaseInitialize } from 'database';

(async () => {
  await databaseInitialize();

  process.exit(0); // eslint-disable-line
})();
