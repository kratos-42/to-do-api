import { BadRequestError } from 'easy-http-errors';
import { validateSchema } from 'utils/validator';
import modelCreateSchema from 'to-do/schemas/to-do-create-schema';
import modelPatchSchema from 'to-do/schemas/to-do-patch-schema';
import toDoManager from 'to-do/managers/to-do-manager';
import validator from 'validator';

export default router => {
  // Delete.
  router.delete('DELETE /to-dos/:id', '/to-dos/:id', async ctx => {
    const { id } = ctx.params;

    if (!validator.isUUID(id)) {
      throw new BadRequestError('`id` must be an UUID');
    }

    await toDoManager.deleteById(id);

    ctx.status = 204;
  });

  // Get all.
  router.get('GET /to-dos', '/to-dos', async ctx => {
    const toDos = await toDoManager.fetchAll();

    ctx.body = { data: toDos };
  });

  // Update.
  router.patch('PATCH /to-dos/:id', '/to-dos/:id', async ctx => {
    validateSchema(modelPatchSchema, ctx.request.body);

    const { id } = ctx.params;

    if (!validator.isUUID(id)) {
      throw new BadRequestError('`id` must be an UUID');
    }

    const toDo = await toDoManager.patchAndFetchById(id, ctx.request.body);

    ctx.body = { data: toDo };
  });

  // Create.
  router.post('POST /to-dos', '/to-dos', async ctx => {
    validateSchema(modelCreateSchema, ctx.request.body);

    const toDo = await toDoManager.insert(ctx.request.body);

    ctx.body = { data: toDo };
  });
};
