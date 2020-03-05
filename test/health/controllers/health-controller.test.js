import request from 'test/utils/request';

describe('HealthController', () => {
  describe('GET /health', () => {
    it('Should return 200 with message on `body', async () => {
      const { body } = await request
        .get('/health')
        .expect(200);

      expect(body.message).toEqual('OK');
    });
  });
});
