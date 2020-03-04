import { clearDatabase } from 'test/utils/clearDatabase';
import { utcRegex } from 'test/utils/regex';
import { v4 } from 'uuid';
import request from 'test/utils/request';
import toDoManager from 'to-do/managers/to-do-manager';

describe('ToDoController', () => {
  beforeEach(clearDatabase);

  describe('DELETE /to-dos/:id', () => {
    it('Should delete the `to-do` with given `id` and return 204', async () => {
      const { id } = await toDoManager.insert({ description: 'foobar', title: 'foobar' });

      await request
        .delete(`/to-dos/${id}`)
        .expect(204);

      expect(await toDoManager.fetchById(id)).toEqual(undefined);
    });

    it('Should return 400 if the `to-do` `id` is not an UUID', async () => {
      const { body } = await request
        .delete(`/to-dos/123`)
        .expect(400);

      expect(body.error.message).toEqual('`id` must be an UUID');
    });
  });

  describe('GET /to-dos', () => {
    it('Should return 200 with a list of `to-do` `body.data`', async () => {
      const toDoFobar = await toDoManager.insert({ description: 'foobar', title: 'foobar' });
      const toDoFobiz = await toDoManager.insert({ description: 'foobiz', title: 'foobiz' });
      const { body } = await request
        .get('/to-dos')
        .expect(200);

      expect(body.data).toEqual([
        {
          ...toDoFobar,
          createdAt: expect.stringMatching(utcRegex),
          updatedAt: expect.stringMatching(utcRegex)
        },
        {
          ...toDoFobiz,
          createdAt: expect.stringMatching(utcRegex),
          updatedAt: expect.stringMatching(utcRegex)
        }
      ]);
    });
  });

  describe('PATCH /to-dos/:id', () => {
    it('Should patch an existing `to-do` and return 200 with the patched item in `body.data`', async () => {
      const { id } = await toDoManager.insert({ description: 'foobar', title: 'foobiz' });
      const { body } = await request
        .patch(`/to-dos/${id}`)
        .send({
          description: 'quux',
          title: 'qux'
        })
        .expect(200);

      expect(body.data).toEqual({
        createdAt: expect.stringMatching(utcRegex),
        description: 'quux',
        id,
        title: 'qux',
        updatedAt: expect.stringMatching(utcRegex)
      });
    });

    it('Should return 404 if the `to-do` with given `id` does not exist', async () => {
      const { body } = await request
        .patch(`/to-dos/${v4()}`)
        .send({
          description: 'quux',
          title: 'qux'
        })
        .expect(404);

      expect(body.error.message).toEqual('To Do does not exist');
    });
  });

  describe('POST /to-dos', () => {
    it('Should create a `to-do` and return 200 with the created item in `body.data`', async () => {
      const { body } = await request
        .post('/to-dos')
        .send({
          description: 'foobar',
          title: 'foobiz'
        })
        .expect(200);

      expect(body.data).toEqual({
        createdAt: expect.stringMatching(utcRegex),
        description: 'foobar',
        id: expect.any(String),
        title: 'foobiz',
        updatedAt: expect.stringMatching(utcRegex)
      });
    });
  });
});
