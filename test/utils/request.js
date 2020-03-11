import app from 'app';
import request from 'supertest';

export default (() => {
  return request(app().callback());
})();
