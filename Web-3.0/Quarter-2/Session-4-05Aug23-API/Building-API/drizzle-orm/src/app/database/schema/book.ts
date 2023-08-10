import { integer, pgEnum, pgTable, serial, uniqueIndex, varchar } from 'drizzle-orm/pg-core';
import { book_language } from './book_language';
 

export const book = pgTable('book', {
  book_id: serial('book_id').primaryKey(),
  title: varchar('title', { length: 400 }),
  isbn13: varchar('isbn13', { length: 50 }),
  language_id: integer('language_id').references(() => book_language.language_id)
});
