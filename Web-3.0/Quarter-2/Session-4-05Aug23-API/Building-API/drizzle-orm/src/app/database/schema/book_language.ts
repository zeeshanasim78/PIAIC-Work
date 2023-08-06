import { integer, pgEnum, pgTable, serial, uniqueIndex, varchar } from 'drizzle-orm/pg-core';
 

export const book_language = pgTable('book_language', {
  language_id: serial('language_id').primaryKey(),
  language_code: varchar('language_code', { length: 50 }),
  language_name: varchar('language_name', { length: 400 })
});
