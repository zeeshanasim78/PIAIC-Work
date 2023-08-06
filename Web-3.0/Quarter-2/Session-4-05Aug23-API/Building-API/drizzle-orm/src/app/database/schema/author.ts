import { integer, pgEnum, pgTable, serial, uniqueIndex, varchar } from 'drizzle-orm/pg-core';
  
export const author = pgTable('author', {
  author_id: serial('author_id').primaryKey(),
  author_name: varchar('author_name', { length: 400 }),
});
 