import { z } from 'zod';

const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  author: z.string(),
  img: z.string(),
});

export const createSchema = taskSchema
  .pick({
    title: true,
    description: true,
  })
  .and(
    z.object({
      // if true, isPriority would be ''; if false, isPriority would not be in the object, thus optional
      // not sure whether using Object.fromEntries is the right way, or there are other ways of validating
      isPriority: z.string().optional(),
    })
  );

export const tasksSchema = z.array(taskSchema);
