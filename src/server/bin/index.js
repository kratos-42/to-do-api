import 'database/bin/database-migrate';
import app from 'app';
import config from 'config';

const port = config.get('server.port');

app().listen(port);
